// defining variables:
let colours =['red', 'green', 'blue', 'yellow']
let computerSequence
let userSequence
let isComputerPlaying = true;
let round = 1;
let sound = new Audio ('audio.mp3');
let muteOn = false;


function randomColour () {
    let random = colours[Math.floor(Math.random() * colours.length)];
    computerSequence.push(random)
}

function computerLightsUp(){
    $('nav').text('Round: ' + round);
    computerSequence.forEach(function(colour, index){
        setTimeout(function(){
            if (colour ===('red')) {
                $('.red').css( { opacity: "1"} );
                setTimeout(function () {
                    $('.red').css( { opacity: "0.7",} );
                }, 600)} 
        
            if (colour ===('blue')) {
                $('.blue').css( { opacity: "1"} );
                setTimeout(function () {
                    $('.blue').css( { opacity: "0.7",} );
                }, 600)} 
    
            if (colour ===('green')) {
                $('.green').css( { opacity: "1"} );
                setTimeout(function () {
                    $('.green').css( { opacity: "0.7",} );
              }, 600)} 
    
            if (colour ===('yellow')) {
                $('.yellow').css( { opacity: "1"} );
                 setTimeout(function () {
                    $('.yellow').css( { opacity: "0.7",} );
                }, 600)}
            // play sound after each colour
            if (muteOn == false) {
                sound.cloneNode().play();
                
            }
        }, 1000 * index +800);
        
    })
    // end of computer turn, set up player turn
    setTimeout(function(){
        isComputerPlaying = false;
        $('h1').fadeOut(200, function(){
            $(this).text('Your Turn').fadeIn(200);
        })
        $('h2').html('Repeat the  <br>pattern');
        $('div1').css({'cursor': "pointer"})
    }, 1000 * computerSequence.length + 600)
}

function incrementGame () {
    setTimeout(function(){
        userSequence=[]
        randomColour()
        computerLightsUp()
        $('h1').fadeOut(200, function(){
            $(this).text('SIMON SAYS').fadeIn(200);
        })
        $('h2').html('Remember the  <br>pattern');
    }, 800)   
}

function playAgain () {
    $('h1').fadeOut(50, function(){
        $(this).text('Wrong Pattern').fadeIn(200);
    })
    $('h2').css({display: "none"});
    $('h3').css({display: "block"});
    round = 1;
    $('nav').text('Round: ' + round);
    }

function startGame (){
    $('h1').html('SIMON SAYS');
    $('h2').html('Remember the <br>pattern');
    $('h2').css({display: "block"});
    $('h3').css({display: "none"})
    isComputerPlaying = true;
    computerSequence =[]
    userSequence=[]

    // COMPUTER SEQUENCE
    //randomize colours into computer sequence array + lights up 
    for (var colour= 0; colour<1;colour++) {
        randomColour()
    }
    computerLightsUp()

    // USER SEQUENCE
    // lights up when you click
    $('div1').on('click', function(evt) {
        evt.stopImmediatePropagation();
        if (isComputerPlaying) return;
        if (muteOn == false) {
            sound.cloneNode().play();
        }
        let litColour = $(this).css( { opacity: "1"} );
        setTimeout(function () {
            litColour.css( { opacity: "0.7",} );
        }, 400);

    // put colour into the user array

      userSequence.push( $(this).attr('class'))
    
    //compare user and computer arrays at each index 
        userSequence.forEach(function(colour, index){
            if (userSequence[index] !== computerSequence[index]) {
                playAgain()
            }
        })
    //compare user and computer arrays at final index
        if (userSequence.length === computerSequence.length) {
            let computerString = computerSequence.toString() 
            let userString = userSequence.toString()
            if (computerString ===userString) {
                // set up computer turn
                isComputerPlaying= true;
                $('div1').css({'cursor': "default"})
                incrementGame();
                round ++;
            }
        }
    })
}

//start + play again button
$('.start').on('click', function(evt) {
        startGame()
    })

// sound button 
$('.sound-button').on('click', function() {
    if (muteOn === false) {
        $(this).text('Sound: Off');
        muteOn = true;
    }
    else if (muteOn =true) {
        $(this).text('Sound: On');
        muteOn = false;
    }
})
