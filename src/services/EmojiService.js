import randArray from '../lib/rand-array'

const service = {
  clapback
};

function clapback({text, emojis = ['👏'], randomize = false}){
  const emojiList = new randArray(emojis, randomize);
  const lenEmojis = emojis.length;
  const words = text.split(/\s+/);

  if(words.length === 1) return `${emojiList.next()} ${words[0]} ${emojiList.next()}`;

  return words
    .reduce((res, curr, idx, src) => {
      if(idx === src.length - 1) return res + curr;

      return res + (curr + ` ${emojiList.next()} `);
    }, '');
}

export default service;
