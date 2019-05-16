import TextService from './TextService'


test('exists', () => {
  expect(TextService).not.toBe(undefined)
})

test('should capitalize', () => {
  const text = 'lowercase';
  let actual = TextService.capitalize(text);

  expect(actual).toBe('LOWERCASE');
})
