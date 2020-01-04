// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// // returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')

// // returns 'www.codewars.com?page=1'
// removeUrlAnchor('www.codewars.com?page=1')

function removeUrlAnchor(url) {
  // TODO: complete
  if (url.endsWith("/")) {
    return url;
  } else {
    let newUrl = url.slice(0, url.indexOf("#"));
    return newUrl;
  }
}
removeUrlAnchor("www.codewars.com/katas/#about");
