const { count } = require('console');
const fs = require('fs');
const { join } = require('path');
const templateData = fs.readFileSync(join(__dirname, `web-template.html`), 'utf-8');
const institutions = JSON.parse(fs.readFileSync(join(__dirname, `institutions.json`), 'utf-8'));
const xmlrpc = require('xmlrpc');

const get_info = (schule, cb = () => {}) => {
	if (schule) {
		let found = institutions.find((e) => {
			return e.short === schule;
		});
		if (found.short && found.name) {
			const client = xmlrpc.createSecureClient(
				`https://schule-infoportal.de/${schule}/schule_portal/webservices/sprechstunden.php`
			);

			client.methodCall('portal.ws_spr_std', [], (error, value) => {
				if (error) {
					cb({ status: 'fail', detail: 'school_not_found' });
				} else {
					value = value.replace(/\"\;\i\:/gi, '-BREAKER-');
					value = value.replace(/\"\;\}/gi, '');
					value = value.split('-BREAKER-');
					let name = [];
					let kurz = [];
					value.forEach((v) => {
						// array formatting
						v = v.replace(/\&nbsp;/gi, ' ');
						v = v.replace(/<br \/>/gi, ' - ');
						v = v.split(':"')[1];
						v = v.split('#');
						// convert Fächer to Array
						v[2] = v[2] + ', ';
						v[2] = v[2].split(', ');
						v[2] = v[2].filter((item) => item);
						// push to result array
						name.push(v[0]);
						kurz.push(v[5]);
					});
					cb({ status: 'ok', kurz, name, schulname: found.name });
				}
			});
		} else {
			cb({ status: 'fail', detail: 'school_not_found' });
		}
	} else {
		cb({ status: 'fail', detail: 'school_not_found' });
	}
};

module.exports = (req, res) => {
	let out = '';
	if (req.query.s) {
		get_info(req.query.s, (data) => {
			out += /*html */ `<h3>${data.name.length} Lehrer von '${data.schulname}'</h3>`;
			let counter = 0;
			data.name.forEach((long) => {
				out += /*html */ `<p>${long} (${data.kurz[counter]})</p>`;
				counter++;
			});
			const rendered = templateData.replace(/{{{content}}}/gi, out);
			res.send(rendered);
		});
	} else {
		out = '<p>Es wurde keine Schule angegeben...</p>';
		const rendered = templateData.replace(/{{{content}}}/gi, out);
		res.send(rendered);
	}
};
