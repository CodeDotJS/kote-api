'use strict';

const got = require('got');
const cheerio = require('cheerio');

const goodReadQuotes = () => {
	const url = 'https://www.goodreads.com/quotes_of_the_day';

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		const quotes = $('.quoteText').text().trim();
		return {
			quote: quotes.split('//<!')[0].trim().split('―')[0].trim()
		};
	});
};

const brainyQuotes = () => {
	const url = 'http://www.brainyquote.com/quotes_of_the_day.html';

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			quote: $('.b-qt:link').eq(0).text().trim()
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

exports.goodReads = goodReadQuotes;
exports.brainyQuote = brainyQuotes;
exports.eduro = eduroQuotes;
