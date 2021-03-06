var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

var memoryGame = new MemoryGame(cards);

$(document).ready(function(){
  // var memoryGame = new MemoryGame(cards);
  var html = '';

  memoryGame.pickedCards = [];
  memoryGame.shuffleCards(cards);

  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function

  function changeClass(elementClass) {
    $(elementClass).toggleClass("back");
    $(elementClass).toggleClass("front");
    $(elementClass).siblings().toggleClass("back");
    $(elementClass).siblings().toggleClass("front");
    $(elementClass).toggleClass("control");
  }


  $('.back').click(function(){

    memoryGame.pickedCards.push($(this).attr("name"));
    
    changeClass(this);

    if (memoryGame.pickedCards.length === 2) {
      var clicked = memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1]);

      $("#pairs_clicked").text(memoryGame.pairsClicked);
      $("#pairs_guessed").text(memoryGame.pairsGuessed);

      if ( clicked ) {
        $('.control').toggleClass("control");
        if ( memoryGame.isFinished()) {
          setTimeout(function() {
            alert("Game completed!!!");
          },1000);
        }      

      } else {
        setTimeout(function() {
          changeClass('.control');
        },500);
          }
      memoryGame.pickedCards = [];
    }
  });
});

