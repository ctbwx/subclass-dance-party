// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  this.setPosition(top, left);
};

makeDancer.prototype.constructor = makeDancer;

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(top, left) {
  var arr = window.dancers;

  arr.forEach(function(dancer){
    this.$node.remove();
  });
}
