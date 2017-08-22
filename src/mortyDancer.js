var mortyDancer = function(top, left) {
  makeDancer.call(this, top, left);

  this.$node = $('<span class="mortyDancer"></span>');
  this.setPosition(top, left);
};

mortyDancer.prototype = Object.create(makeDancer.prototype);
mortyDancer.prototype.constructor = mortyDancer;
