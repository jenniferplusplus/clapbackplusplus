import EmojiService from './EmojiService';

describe('The standard clapback', () => {
  test('should insert symbols between words', () => {
    const values = {
      text: 'just some words.',
      emojis: ['👏'],
      randomize: false
    };

    const actual = EmojiService.clapback(values);

    expect(actual).toBe('just 👏 some 👏 words.');
  });

  test('should surround single words', () => {
    const values = {
      text: 'lonely',
      emojis: ['👏'],
      randomize: false
    };

    const actual = EmojiService.clapback(values);

    expect(actual).toBe('👏 lonely 👏');
  });

  test('should cycle through multiple emojis', () => {
    const values = {
      text: 'The intent is to provide players with a sense of pride and accomplishment for unlocking different heroes.',
      emojis: ['💲', '🙄'],
      randomize: false
    };

    const actual = EmojiService.clapback(values);

    expect(actual).toBe('The 💲 intent 🙄 is 💲 to 🙄 provide 💲 players 🙄 with 💲 a 🙄 sense 💲 of 🙄 pride 💲 and 🙄 accomplishment 💲 for 🙄 unlocking 💲 different 🙄 heroes.');
  });

  test('should allow random order', () => {
    const values = {
      text: 'The intent is to provide players with a sense of pride and accomplishment for unlocking different heroes.',
      emojis: ['💲', '🙄'],
      randomize: true
    };

    const actual = EmojiService.clapback(values);

    expect(actual).not.toBe('The 💲 intent 🙄 is 💲 to 🙄 provide 💲 players 🙄 with 💲 a 🙄 sense 💲 of 🙄 pride 💲 and 🙄 accomplishment 💲 for 🙄 unlocking 💲 different 🙄 heroes.');
  });
// The intent is to provide players with a sense of pride and accomplishment for unlocking different heroes.
});
