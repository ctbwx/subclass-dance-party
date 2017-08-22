$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var blinkyDancer = new makeBlinkyDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(blinkyDancer.$node);
    });

    $('.addRickButton').on('click', function(event) {
      // get the maker function for the kind of dancer we're supposed to make
      var rickMakerFunctionName = $(this).data('rick-maker-function-name');
      var rickMakerFunction = window[rickMakerFunctionName];
      // make a dancer with a random position
      var newRickDancer = new rickDancer(
        $("body").height() * Math.random(),
        $("body").width() * Math.random()
      );
      $('body').append(rickDancer.$node);
      });
});
