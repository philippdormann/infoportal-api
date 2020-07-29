const fs = require('fs');
const raw = fs.readFileSync(`./institutions-raw.txt`, 'utf-8');
const cheerio = require('cheerio');
const institutions = raw.split('\r\n');
const request = require('request-promise');
const urls = institutions.map((i) => `https://${i}.eltern-portal.org`);
// console.log(urls);
const promises = urls.map((url) => request(url));
let resultArray = [];
Promise.all(promises).then((data) => {
	count = 0;
	institutions.forEach((i) => {
		// console.log('-------------------');
		// console.log(i);
		let $ = cheerio.load(data[count]);
		const long_name = $('title').text().replace('Eltern-Portal ', '');
		// console.log(long_name);
		// console.log('-------------------');
		resultArray.push({ short: i, name: long_name });
		console.log(`|${i}|${long_name}|`);
		count++;
	});
	console.log('*****************');
	console.log(JSON.stringify(resultArray));
});
