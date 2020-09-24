// initiale the game
// pick a random letter
// wait for user to type a key on their keyboard
// chekc that leter against the random letter the computer chose
// let the user knwo if they are right or wrong
// if wrong, we deduct fromt eh $ of guesses and show them the wrong guess, then render on the screen
// if wrong and dotn have guesses left show losing message and update the game, reset the game
// if right, we show a winning message and update the wins and reseet the game





// Game variables
let wins = 0
let losses = 0
let guessesLeft = 10
let userGuesses = ['']
let randomLetter
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')  //generates an array from the string of letters

// set the value of the span with ID win in our front end to the value of the ui variable at teh tiem we call the function
const winsElement = () => (document.getElementById('wins').innerHTML = wins)
const lossesElement = () => (document.getElementById('losses').innerHTML = losses)
const guessesLeftElement = () => (document.getElementById('guesses-left').innerHTML = guessesLeft)
const userGuessesElement = () => (document.getElementById('user-guesses').innerHTML = userGuesses)

//utility function
const computerChoice = () => {
    //recreate letters at an index
    randomLetter = letters[Math.floor(Math.random() * letters.length)]
    console.log(randomLetter)
}


// initialize the game function
const initializeGame = () => {
    /**
     * 2 scenarios
     * no matter what alwyas pick a random letter
     * a on the first load
     * --show the wins, losses, guesses left as the initial data
     * show the user-guesses array with new letters
     * 
     * b after a game is finished
     * --show the wins, losses, guesses left as the initial data
     * --show teh guesses left from a new game, same as the initial load
     * clear out hte old guesses & show the user guess array with no letters
     */ 

    if (userGuesses.length > 0 && guessesLeft !== 10) {
        userGuesses = [] //reset prev guesses to none
        guessesLeft = 10

    }

    winsElement()
    lossesElement()
    guessesLeftElement()
    userGuessesElement()
    computerChoice()

}


// UI Functions, use functions to store code that will manipulate the dom



//  event listeners
// listen for user to type a key in the keyboard
//check that against the random letter chosen by pc
// if right -> win, then incremnt wins and show the win message
// if wrong -> then decrement # of guesses
// if no guesses left, then -> losss +1 to a loss based on game end
// a) [a,b,c,d,e.....] 10th elm <== at the time of the loss condition
//


// initialize the app
initializeGame()