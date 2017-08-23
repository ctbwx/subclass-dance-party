$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * (Math.random() * (.74 - .23) + .23),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    console.log(dancer.$node)
    $('body').append(dancer.$node);

    window.dancers.push(dancer);

    });

    $('.lineUpButton').on('click', function(event) {
      
    });
});
