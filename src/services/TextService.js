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

const service = {
  capitalize,
  randomCase
};


export default service;
