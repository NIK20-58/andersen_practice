const isValidStr = (item) => {
  return typeof item === 'string';
}

function concatStrings(initialString, separator) {
  let result = isValidStr(initialString) ? initialString : '';

  function innerConcat(nextString) {
      if (nextString === null) {
        return result;
      }
      
      if (isValidStr(nextString)) {

          if (isValidStr(separator)) {
              result += separator;
          }

          result += nextString || '';
          return innerConcat;
      } else {
          return result;
      }
  }

  return innerConcat;
}