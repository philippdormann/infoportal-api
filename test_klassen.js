const xmlrpc = require('xmlrpc');
const client = xmlrpc.createSecureClient(
	'https://schule-infoportal.de/heraugy/schule_portal/webservices/klassenliste.php'
);

client.methodCall('portal.ws_klassen', [], (error, value) => {
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
			// push to result array
			result.push(v);
		});
		console.log(result);
	}
});
