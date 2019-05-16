import TitleCase from 'title-case'

function capitalize(text) {
  return String(text).toUpperCase();
}

function randomCase(text) {
  let s = String(text).toLocaleLowerCase().split('');

  let result = s.map((val) => {
    return Math.random() > 0.50
      ? val.toUpperCase()
      : val;
  });

  return result.join('');
}

function titleCase(text) {
  return TitleCase(String(text));
}

const service = {
  capitalize,
  randomCase,
  titleCase
};


export default service;
