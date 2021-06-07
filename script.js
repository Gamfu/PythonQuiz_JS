/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and rotates a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/*
variable for the following 
1) Image that each question is based off of
2) Each answer choice
3) Correct answer choice
4) Keep track of errors
5) Link to resource
*/

/*
Instructional notes:
-- Query Selector Info --
Have to specific which styling you want to use. (ex #idName .className)
Use querySelector when you want to change multiple items within a div. (*note this will replace all elements within set div with the items you specified)

-- Get Element By Id Info --
No need to specific which styling you want to use. 
Use getElementById when you want to change one element with a specific ID

--- let vs const ---
  Variables assigned with const can't be changed. Think of it link a constant value that stays in place
  
  Variables assigned with let can be changed

--- Common Errors ----
Keep the javascript reference at the bottom of your html body tag

*/

let score = 0
let questionCount = 0
let error = 0

let opt = [document.querySelector("#answerA"),document.querySelector("#answerB"),document.querySelector("#answerC"),document.querySelector("#answerD")]

const opt1 = document.querySelector("#answerA")
const opt2 = document.querySelector("#answerB")
const opt3 = document.querySelector("#answerC")
const opt4 = document.querySelector("#answerD")

const nextQ = document.querySelector("#FullSpread")
const sceneSwitch = document.querySelector(".buttonLink")

const questImg = document.getElementById("questionImg") 
let sCount = document.getElementById("scoreCount") 
const questHead = document.querySelector("#questionHead")


function start(){
  $("#FullSpread").toggle();
  questionCount = 0;
  questionManager();
     
}

function revealHUD(){
    sceneSwitch.addEventListener("click", (e) => {
     $("#FullSpread").toggle();
      questionManager();
})
}

function questionComplete(){
  sCount.innerHTML = score.toString();
  revealHUD();
}

function questionChange(image, text){
  questImg.src = image;
  questHead.innerHTML = "<h4>" + text + "</h4>";
}

function answerSwap(Ans1, Ans2, Ans3, Ans4){
 opt1.innerHTML = "<p>" + Ans1 + "</p>";
 opt2.innerHTML = "<p>" + Ans2 + "</p>";
 opt3.innerHTML = "<p>" + Ans3 + "</p>";
 opt4.innerHTML = "<p>" + Ans4 + "</p>";
}

function questionManager(){
  switch (questionCount){
  
  case 0: 
    questionChange("","1) Why is having two quotation marks important when making a string in programming?");
    answerSwap("It only tells the computer where your string will begin", "It tells the computer where your string will begin and end", "It tells the computer we're using a number", "It tells the computer we're using a boolean");
    answerToggle(opt[1]);
    break;

  case 1: 
    questionChange("","2) Which of the options below will print out a float data type?");
    answerSwap('print( "float" )', 'print( "5.0" )', 'print( 10.0 )', 'print( 20 )');
    answerToggle(opt[2]);
    break;
  
  case 2: 
    questionChange("https://cdn.glitch.com/b1cf1200-907d-47a0-9455-7d47ea8118d3%2Fdatavar.PNG?v=1623004675891","");
    answerSwap("float", "boolean", "int", "string");
    answerToggle(opt[3]);
    break;
      
  case 3: 
    questionChange("","4) What is the purpose of the print function?");
    answerSwap("Tells the computer you're printing out a message to the console", "Tells the computer you're assigning a piece of data", "Tells the computer you're making a variable", "Tells the computer you're making a boolean");
    answerToggle(opt[1]);
    break;
  }
  
}

function answerToggle(answer){
    for( var i = 0; i < 4; i++ ) 
    {
      opt[i].addEventListener("click", (e) => {
          score -= 10;
          error++;
          console.log(score);
          console.log(error);
      })
    }
    answer.addEventListener("click", (e) => {
          score += 60;
          error = 0;
          questionCount++;
          $("#FullSpread").toggle();
          questionComplete();
          console.log(score);
          console.log(error);
          console.log(questionCount);
      })
}

// -- The program started below --

start();


// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/
