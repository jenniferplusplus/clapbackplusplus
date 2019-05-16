import TextService from './TextService'


test('exists', () => {
  expect(TextService).not.toBe(undefined)
});

test('should capitalize', () => {
  const text = 'lowercase';
  let actual = TextService.capitalize(text);

  expect(actual).toBe('LOWERCASE');
});

test('should randomize the case', () => {
  const text = 'aaaaaaaaaa';
  let actual = TextService.randomCase(text);

  expect(actual).toContain('a');
  expect(actual).toContain('A');
  expect(actual).not.toBe(text);
});

test('should randomize the case for all caps', () => {
  const text = 'AAAAAAAAAA';
  let actual = TextService.randomCase(text);

  expect(actual).toContain('a');
  expect(actual).toContain('A');
  expect(actual).not.toBe(text);
});

test('should title case every word', () => {
  expect(TextService.titleCase('one')).toBe('One');
  expect(TextService.titleCase('ONE')).toBe('One');
  expect(TextService.titleCase('help')).toBe('Help');
  expect(TextService.titleCase('one two')).toBe('One Two');
  expect(TextService.titleCase('red blue green')).toBe('Red Blue Green');
});
