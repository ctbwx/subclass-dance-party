var mortyDancer = function(top, left) {
  makeBlinkyDancer.call(this);

};

mortyDancer.prototype = Object.create(makeBlinkyDancer.prototype);
mortyDancer.prototype.constructor = mortyDancer;
