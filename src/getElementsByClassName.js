// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  // should return an array
  var result = [];
  // inner function - recursive
  var innerFunction = function(element) {
    // if current element has class, push to result
    if (element.classList !== undefined && element.classList.contains(className)) {
     result.push(element);
    }

    // if there still nodes to search, loop thru them
    if (element.childNodes !== undefined) {
      for (var i = 0; i < element.childNodes.length; i++) {
        innerFunction(element.childNodes[i]);
      }
    }
  }

  innerFunction(document.body);
  return result;

};
