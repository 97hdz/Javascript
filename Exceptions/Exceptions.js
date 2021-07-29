
const reverseJsonArray = (e) => {
  try {
    e = JSON.parse(e);
    console.log(e);
    const reverse = e.reverse();
    console.log(`reversed : ${JSON.stringify(reverse)}`);
  } catch (e) {
    throw new SyntaxError('No JSON.stringify value passed');
    return false;
  } finally {
    console.log(`The function only works if "${e}" is a string`);
  }
}

const arrayOne = ['one','two','three','four'];
const valueToPass = JSON.stringify(arrayOne);

reverseJsonArray(valueToPass);
