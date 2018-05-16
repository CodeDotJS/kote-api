'use strict';

const kote = require('./index.js');

kote.eduro().then(res => {
	console.log(res);
});

const returnOptsBrainy = data => {
	return kote.brainyQuote(data).then(res => {
		console.log(res);
	});
};

returnOptsBrainy();
returnOptsBrainy('love');
returnOptsBrainy('art');
returnOptsBrainy('nature');
returnOptsBrainy('funny');
