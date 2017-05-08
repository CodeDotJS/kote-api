import test from 'ava';
import fn from './';

test('goodreads', async t => {
	const kote = await fn.goodReads();

	t.is(kote.quote,
		'“O, ah! The awareness of emptiness brings forth a heart of compassion!”'
	);
});

test('brainyquote', async t => {
	const kote = await fn.brainyQuote();

	t.is(kote.quote,
		`Be pleasant until ten o'clock in the morning and the rest of the day will take care of itself.`
	);
});

test('eduro', async t => {
	const kote = await fn.eduro();

	t.is(kote.quote,
		'Opportunity does not knock, it presents itself when you beat down the door.');
});
