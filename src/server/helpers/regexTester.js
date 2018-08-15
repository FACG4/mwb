const regexNumber = (number) => {
  const regex = /^[0-9]*$/;
  return regex.test(number);
};

const nameRegex = (name) => {
  const regex = /^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
  return regex.test(name);
};

module.exports = { regexNumber, nameRegex };
