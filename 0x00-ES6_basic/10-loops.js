export default function appendToEachArrayValue(array, appendString) {
    for (let idx of array) {
      const value = idx;
      array[array.indexOf(value)] = appendString + value;
    }
  
    return array;
  }
  