const fs = require('fs');
const { join } = require('path');
const institutions = JSON.parse(
	fs.readFileSync(join(__dirname, `../institutions.json`), 'utf-8')
);
const xmlrpc = require('xmlrpc');

const start_it_up = (req, res) => {
	if (req.query.s) {
		let found = institutions.find(function (e) {
			return e.project == req.query.p && e.facility == req.query.e;
		});
		if (found.short && found.name) {
			const client = xmlrpc.createSecureClient(
				`https://schule-infoportal.de/${req.query.s}/schule_portal/webservices/sprechstunden.php`
			);

			client.methodCall('portal.ws_spr_std', [], (error, value) => {
				if (error) {
					console.log('error:', error);
					console.log('req headers:', error.req && error.req._header);
					console.log('res code:', error.res && error.res.statusCode);
					console.log('res body:', error.body);
				} else {
					value = value.replace(/\"\;\i\:/gi, '-BREAKER-');
					value = value.replace(/\"\;\}/gi, '');
					value = value.split('-BREAKER-');
					let result = [];
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
						result.push(v);
					});
					return send_it(
						200,
						{ status: 'ok', payload: result },
						req,
						res
					);
				}
			});
		} else {
			return res.send('fail');
		}
	} else {
		return send_it(404, institutions, req, res);
	}
};

const send_it = (status, body, req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', '*');
	res.setHeader('Content-Type', 'application/json');
	res.status(status).send(body);
};

module.exports = start_it_up;
