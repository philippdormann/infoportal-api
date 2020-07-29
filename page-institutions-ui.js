const fs = require('fs');
const { join } = require('path');
const templateData = fs.readFileSync(
	join(__dirname, `web-template.html`),
	'utf-8'
);
let content = JSON.parse(
	fs.readFileSync(join(__dirname, `institutions.json`), 'utf-8')
);
module.exports = (req, res) => {
	let table = '';
	table += `<p>Currently, there are <u>${content.length}</u> sources in this list.<br>Can't find your organisation? <a href="https://github.com/philippd1/infoportal-api/issues/new">Create a new GitHub issue.</a></p>`;
	content.forEach((src) => {
		table += `
						<h4>${src.name}</h4>
						Facility ShortCode: <code data-clipboard-text="${src.short}">${src.short}</code>
						<br>
						Elternportal: <a target="_blank" href="https://${src.short}.eltern-portal.org">https://${src.short}.eltern-portal.org</a>
						<br>
						Info-Portal Lehrer: <a target="_blank" href="https://schule-infoportal.de/${src.short}/schule_portal">https://schule-infoportal.de/${src.short}/schule_portal</a>
						<br>
						Lehrer: <a target="_blank" href="../api/?s=${src.short}&a=lehrer">../api/?s=${src.short}&a=lehrer</a>
						<hr>
						`;
	});
	const rendered = templateData.replace(/{{{content}}}/gi, table);
	res.send(rendered);
};
