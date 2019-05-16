import randArray from '../lib/rand-array'

const service = {
  clapback,
  punctuate
};

function clapback({text, emojis = ['👏'], randomize = false}) {
  const emojiList = new randArray(emojis, randomize);
  const words = text.split(/\s+/);

  return emojify(words, emojiList, true);
}

function punctuate({text, emojis = ['👏'], randomize = false}) {
  const emojiList = new randArray(emojis, randomize);
  const words = text.split(/[,.?!]+/);

  return emojify(words, emojiList, false);
}

function emojify(words = [], emojiList = new randArray([''], false), withSpace = true) {
  if (words.length === 1) return `${emojiList.next()} ${words[0]} ${emojiList.next()}`;

  return words
    .reduce((res, curr, idx, src) => {
      if (idx === src.length - 1) return res + curr;

      return withSpace
        ? res + (curr + ` ${emojiList.next()} `)
        : res + (curr + `${emojiList.next()}`)
    }, '').trim();
}


export default service;
