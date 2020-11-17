// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  //create result var
  var result = '';

  // primitive data values - number, string, boolean, null
  // string; wrapped w/ ""
  if (typeof obj === 'string') {
    result += '"' + obj + '"';
  } else if (obj === null) {
    result += 'null';
  } else if (typeof obj === 'number' || typeof obj === 'boolean') {
    result += obj;
  }

  if (Array.isArray(obj)) {
    var array = '';
    array += '[';

    // if Array, loop thru
    for (var i = 0; i < obj.length; i++) {
      array += stringifyJSON(obj[i]) + ',';
    }
    // remove last ',' if array is not empty
    if (obj.length !== 0) {
      array = array.slice(0, array.length - 1);
    }

    array += ']';
    result += array;
  }

  if (!Array.isArray(obj) && typeof obj === 'object' && obj !== null) {
    var object = '';
    object += '{';

    // iterate thru obj
    for (var key in obj) {
      if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
        object += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    // if (Object.keys(obj).length !== 0) {
    if (object !== '{') {
      object = object.slice(0, object.length - 1);
    }

    object += '}';
    result += object;
  }
  return result;
};
