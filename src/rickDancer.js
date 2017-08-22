var rickDancer = function(top, left, right, bottom) {
  makeBlinkyDancer.call(this);

};

rickDancer.prototype = Object.create(makeBlinkyDancer.prototype);
rickDancer.prototype.constructor = rickDancer;
