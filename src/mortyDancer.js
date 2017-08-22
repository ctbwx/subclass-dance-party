var mortyDancer = function(top, left, right, bottom) {
  makeBlinkyDancer.call(this);

};

mortyDancer.prototype = Object.create(makeBlinkyDancer.prototype);
mortyDancer.prototype.constructor = mortyDancer;
