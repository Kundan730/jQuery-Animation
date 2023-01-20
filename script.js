
// console.log($('h1').css('color'));
// console.log($('h1').css('font-weight'));

// $('h1').css('color', 'red');

$('h1').addClass('big-heading margin-30'); //multiple classes

// setTimeout(function () {
//   $('h1').removeClass('big-heading');
// }, 1000);

console.log($('h1').hasClass('margin-30'));

$('h1').text('Hello Space');

$('h1').html('<em>Hello Space</em>')

$('button').text('btn');

// console.log($('a').attr('href'));

$('a').attr('href', 'https://www.flashapi.me')

// Add evemt listener

$('h1').click(function () {
  $('h1').css('color', 'gold');
});

for(let i = 0; i < 5; i++) {
  document.querySelectorAll('button')[i].addEventListener('click', function () {
    document.querySelector('h1').style.color = 'red';
  });
}

// Add event listener with jQuery

$('button').click(function() {
  $('h1').css('color', 'green');
});

$('label input').keydown(function(event){
  console.log(event.key);
})

$(document).keydown(function(event){
  console.log(event.key)
  $('h1').text(event.key);
});

// Any dom events in on method

$('h1').on('mouseover', function() {
  $('h1').css('color', 'darkred');
});

$('h1').before('<button>New</button>');
$('h1').after('<button>New</button>');
$('h1').prepend('<button>New</button>');
$('h1').append('<button>New</button>');

// $('button').remove();

//Animation
$('button').on('click', function() {
  // $('h1').hide();
  // $('h1').show();
  // $('h1').fadeOut();
  // $('h1').fadeIn();
  // $('h1').toggle();
  // $('h1').fadeToggle();
  // $('h1').slideUp();
  // $('h1').slideDown();
  // $('h1').slideToggle();
  $('h1').slideUp().slideDown().animate({
    opacity: 0.7,
    marginLeft: '100px',
    fontSize: '70px',
  });
});