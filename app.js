// uploaded to git on: Nov 2
// defining variables:
let colours =['red', 'green', 'blue', 'yellow']
let computerSequence = []
let userSequence = []
let round = 1
let gameOver = false;



function computerLightsUp(){
    computerSequence.forEach(function(colour, index){
        setTimeout(function(){
            if (colour ===('red')) {
                $('.red').css( { opacity: "1"} );
                setTimeout(function () {
                    $('.red').css( { opacity: "0.2",} );
                }, 600)} 
        
            if (colour ===('blue')) {
                $('.blue').css( { opacity: "1"} );
                setTimeout(function () {
                    $('.blue').css( { opacity: "0.2",} );
                }, 600)} 
    
            if (colour ===('green')) {
                $('.green').css( { opacity: "1"} );
                setTimeout(function () {
                    $('.green').css( { opacity: "0.2",} );
              }, 600)} 
    
            if (colour ===('yellow')) {
                $('.yellow').css( { opacity: "1"} );
                 setTimeout(function () {
                    $('.yellow').css( { opacity: "0.2",} );
                }, 600)}
    
        }, 1000 * index +800);
    })
}
function incrementGame () {
        userSequence=[]
        let random = colours[Math.floor(Math.random() * colours.length)];
        computerSequence.push(random)
        console.log (computerSequence)
        computerLightsUp()
    }



// COMPUTER SEQUENCE
//randomize colours into computer sequence array
for (var colour= 0; colour<5;colour++) {
    let random = colours[Math.floor(Math.random() * colours.length)];
    computerSequence.push(random)
}
    console.log (computerSequence)
    computerLightsUp()




// USER SEQUENCE
// lights up when you click

$('div').on('click', function(evt) {
    let litColour = $(this).css( { opacity: "1"} );
        setTimeout(function () {
         litColour.css( { opacity: "0.2",} );
          }, 400);

    // put colour into the user array
    userSequence.push( $(this).attr('class'))
    console.log(userSequence)

    //compare user and computer arrays 
    if (userSequence.length === computerSequence.length) {
        let computerString = computerSequence.toString() 
        let userString = userSequence.toString()

        if (computerString ===userString) {
            console.log("hurray")
            round ++;
            incrementGame ();
        }else {
            gameOver=true;
            console.log("Game Over")
        }
    }
    
 
 })

