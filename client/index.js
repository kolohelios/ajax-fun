'use strict';

$(document).ready(init);

function init(){
  $('#getRandom').click(getRandom);
}

function getRandom(){
  var number = $('#number').val();
  $.getJSON('https://qrng.anu.edu.au/API/jsonI.php?length=' + number + '&type=uint16', function(response){
    response.data.forEach(function(number) {
    });
    $('#sum').val(sum(response.data));
  });
}

function sum(numbers){
  var total = 0;
  numbers.forEach(function(number) {
    total += number;
  });
  return total;
}
