import test from 'ava';
import fn from './';

test('brainyquote', async t => {
	const kote = await fn.brainyQuote();
	t.is(kote.quote, 'Words are often seen hunting for an idea, but ideas are never seen hunting for words.');
});

test('brainyquoteLove', async t => {
	const kote = await fn.brainyQuote('love');
	t.is(kote.quote, 'Love is an energy which exists of itself. It is its own value.');
});

test('brainyquoteNature', async t => {
	const kote = await fn.brainyQuote('nature');
	t.is(kote.quote, 'A good garden may have some weeds.');
});

test('brainyquoteArt', async t => {
	const kote = await fn.brainyQuote('art');
	t.is(kote.quote, 'Anything simple always interests me.');
});

test('brainyquoteFunny', async t => {
	const kote = await fn.brainyQuote('funny');
	t.is(kote.quote, 'He was like a cock who thought the sun had risen to hear him crow.');
});

test('eduro', async t => {
	const kote = await fn.eduro();
	t.is(kote.quote, 'A good decision is based on knowledge and not on numbers.');
});
