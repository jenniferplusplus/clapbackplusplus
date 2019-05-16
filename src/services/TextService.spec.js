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

})
