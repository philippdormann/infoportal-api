const xmlrpc = require('xmlrpc');
const client = xmlrpc.createSecureClient(
	'https://schule-infoportal.de/heraugy/schule_portal/webservices/stundenplan.php'
);

client.methodCall('portal.ws_kl_stundenplan', ['8D'], (error, value) => {
	if (error) {
		console.log('error:', error);
		console.log('req headers:', error.req && error.req._header);
		console.log('res code:', error.res && error.res.statusCode);
		console.log('res body:', error.body);
	} else {
		console.log(value);
	}
});
