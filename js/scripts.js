$(document).ready(function() {
  var symbols = ["diamonds", "clubs", "spades", "hearts"]
  var values = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"]



symbols.forEach(function(symbol) {
  values.forEach(function(value) {
    $("ul").append("<li>"+value+"of"+symbol+"</li>");
});
});
});
