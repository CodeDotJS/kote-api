'use strict';

const got = require('got');
const cheerio = require('cheerio');

const data = {
	love: 1,
	art: 2,
	nature: 3,
	funny: 4
};

const brainyQuotes = opts => {
	let val = data[opts];
	if (!opts) {
		val = 0;
	}

	// let val;
	// opts === undefined ? val = 0 : val = data[opts];

	const url = 'http://www.brainyquote.com/quotes_of_the_day.html';

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			quote: $('.b-qt:link').eq(val).text().trim()
		};
	});
};

const eduroQuotes = () => {
	const url = 'http://www.eduro.com/';

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			quote: $('.article dailyquote p').eq(0).text().trim()
		};
	});
};

exports.brainyQuote = brainyQuotes;
exports.eduro = eduroQuotes;
