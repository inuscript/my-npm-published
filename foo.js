names = Array.prototype.map.call(elms, function (elm) {
  console.log(elm.text)
  return elm.text;
}).join(" ")