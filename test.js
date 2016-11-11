import test from 'ava';
import fn from './';

test('goodreads', async t => {
	const kote = await fn.goodReads();

	t.is(kote.quote,
		`“The nicest veterans...the kindest and funniest ones, the ones who hated war the most, were the ones who'd really fought.”`
	);
});

test('brainyquote', async t => {
	const kote = await fn.brainyQuote();

	t.is(kote.quote,
		'No one can read with profit that which he cannot learn to read with pleasure.'
	);
});

test('eduro', async t => {
	const kote = await fn.eduro();

	t.is(kote.quote,
		'Don’t cry because it’s over, smile because it happened.');
});
