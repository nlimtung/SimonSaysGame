// uploaded to git on: Nov 6
// defining variables:
let colours =['red', 'green', 'blue', 'yellow']
let computerSequence
let userSequence
let isComputerPlaying = true;

// defining common functions

function randomColour () {
    let random = colours[Math.floor(Math.random() * colours.length)];
    computerSequence.push(random)
}

function computerLightsUp(){
    computerSequence.forEach(function(colour, index){
        setTimeout(function(){
            if (colour ===('red')) {
                $('.red').css( { opacity: "1.5"} );
                setTimeout(function () {
                    $('.red').css( { opacity: "0.6",} );
                }, 600)} 
        
            if (colour ===('blue')) {
                $('.blue').css( { opacity: "1.5"} );
                setTimeout(function () {
                    $('.blue').css( { opacity: "0.6",} );
                }, 600)} 
    
            if (colour ===('green')) {
                $('.green').css( { opacity: "1"} );
                setTimeout(function () {
                    $('.green').css( { opacity: "0.6",} );
              }, 600)} 
    
            if (colour ===('yellow')) {
                $('.yellow').css( { opacity: "1"} );
                 setTimeout(function () {
                    $('.yellow').css( { opacity: "0.6",} );
                }, 600)}
    
        }, 1000 * index +800);
        
    })
    setTimeout(function(){
        $('h1').html('Your Turn');
        $('h2').html('Repeat the  <br>pattern');
        isComputerPlaying = false;
        $('div1').css({'cursor': "pointer"})

    }, 1000 * computerSequence.length + 600)
}

function incrementGame () {
    setTimeout(function(){
        userSequence=[]
        randomColour()
        console.log(computerSequence)
        computerLightsUp()
        $('h1').html('Simon Says');
        $('h2').html('Remember the  <br>pattern');
    }, 800)
   
  }

//start + play again button
$('.start').on('click', function(evt) {
        startGame()
    })


function playAgain () {
    $('h1').html('Wrong Pattern');
    $('h2').css({display: "none"});
    $('h3').css({display: "block"});
    }


function startGame () {
    $('h1').html('SIMON SAYS');
    $('h2').html('Remember the <br>pattern');
    $('h2').css({display: "block"});
    $('h3').css({display: "none"})
    isComputerPlaying = true;
    computerSequence =[]
    userSequence=[]

    // COMPUTER SEQUENCE
    //randomize colours into computer sequence array
    for (var colour= 0; colour<1;colour++) {
        randomColour()
    }
    console.log (computerSequence)
    computerLightsUp()

    // USER SEQUENCE
    // lights up when you click
    $('div1').on('click', function(evt) {
        evt.stopImmediatePropagation();
        if (isComputerPlaying) return;
        let litColour = $(this).css( { opacity: "1"} );
        setTimeout(function () {
            litColour.css( { opacity: "0.6",} );
        }, 400);

    // put colour into the user array

      userSequence.push( $(this).attr('class'))
      console.log (userSequence)
    
    //compare user and computer arrays at each index 
    userSequence.forEach(function(colour, index){
        if (userSequence[index] !== computerSequence[index]) {
            console.log ("they are not the same")
            playAgain()
        }
    })

    //compare user and computer arrays 
    if (userSequence.length === computerSequence.length) {
        let computerString = computerSequence.toString() 
        let userString = userSequence.toString()
        if (computerString ===userString) {
            console.log("hurray")
            isComputerPlaying= true;
            $('div1').css({'cursor': "default"})
            incrementGame();
        }else {
            playAgain()
            console.log("Game Over")
        }
    }
 })

}