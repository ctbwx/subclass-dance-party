var rickDancer = function(top, left) {
  makeDancer.call(this, top, left);

  this.$node = $('<span class="rickDancer"></span>');
  this.$node.addClass('animated lightSpeedIn')
  this.setPosition(top, left);
};

rickDancer.prototype = Object.create(makeDancer.prototype);
rickDancer.prototype.constructor = rickDancer;
