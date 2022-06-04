// Notes 
// The <span> tag is an inline container used to mark up a part of a text, 
// or a part of a document. 
// The <span> tag is easily styled by CSS or manipulated with JavaScript 
// using the class or id attribute. The <span> tag is much like the 
// <div> element, but <div> is a block-level element and <span> is an 
// inline element.


// One thing that will need to change in each of the event listeners 
// that you've created so far is the console.log command. Becuase the 
// manager doesn't want the rating logged with each button click, 
// but he does want the ratings in the bottom div to be updated, 
// each console.log will need to be changed to update the appropriate 
// span tag instead. This can be done by updating the textContent of the 
// appropriate span tag in each rating click listener. 
// For example, if the span tag for the cashier has an Id of "cashierScore", 
// and we stored the span in a variable called cashierScore (as shown below),
// we could use the command cashierScore.textContent = cashier to update the span 
// with our new score.

//create variables to hold the cashier scores
let cashier = 0
let c_tot = 0
let c_num = 0

//create variables to hold the overall scores
let overall = 0
let o_tot = 0
let o_num = 0

let cashierScore = document.getElementById("cashierScore")
let overallScore = document.getElementById("overallScore")


//cashier button 1
cashierScoreBtn1 = document.getElementById("cashier-1")
cashierScoreBtn1.addEventListener("click", function() {
	c_tot = c_tot + 1 //adding 1 to score
	c_num = c_num + 1
	cashier = c_tot / c_num
	cashierScore.textContent = cashier
})

//cashier button 2
cashierScoreBtn2 = document.getElementById("cashier-2")
cashierScoreBtn2.addEventListener("click", function() {
	c_tot = c_tot + 2 //adding 2 to score
	c_num = c_num + 1
	cashier = c_tot / c_num
	cashierScore.textContent = cashier
})

//cashier button 3
cashierScoreBtn3 = document.getElementById("cashier-3")
cashierScoreBtn3.addEventListener("click", function() {
	c_tot = c_tot + 3 //adding 3 to score
	c_num = c_num + 1
	cashier = c_tot / c_num
	cashierScore.textContent = cashier
})

//cashier button 4
cashierScoreBtn4 = document.getElementById("cashier-4")
cashierScoreBtn4.addEventListener("click", function() {
	c_tot = c_tot + 4 //adding 4 to score
	c_num = c_num + 1
	cashier = c_tot / c_num
	cashierScore.textContent = cashier
})

//overall button 1
overallScoreBtn1 = document.getElementById("overall-1")
overallScoreBtn1.addEventListener("click", function() {
	o_tot = o_tot + 1 //adding 1 to score
	o_num = o_num + 1
	overall = o_tot / o_num
	overallScore.textContent = overall
})

//overall button 2
overallScoreBtn2 = document.getElementById("overall-2")
overallScoreBtn2.addEventListener("click", function() {
	o_tot = o_tot + 2 //adding 2 to score
	o_num = o_num + 1
	overall = o_tot / o_num
	overallScore.textContent = overall
})

//overall button 3
overallScoreBtn3 = document.getElementById("overall-3")
overallScoreBtn3.addEventListener("click", function() {
	o_tot = o_tot + 3 //adding 3 to score
	o_num = o_num + 1
	overall = o_tot / o_num
	overallScore.textContent = overall
})

//overall button 4
overallScoreBtn4 = document.getElementById("overall-4")
overallScoreBtn4.addEventListener("click", function() {
	o_tot = o_tot + 4 //adding 4 to score
	o_num = o_num + 1
	overall = o_tot / o_num
	overallScore.textContent = overall
})



let showHide = document.getElementById("show-hide")
showHide.addEventListener('click',function(){
  let scoresDiv = document.getElementById("show-scores")

  cashierScore.textContent = cashier
  overallScore.textContent = overall

  let btnText = showHide.textContent
  if(btnText === "Display Ratings"){
	scoresDiv.style.display = "block"
	showHide.innerHTML = "Hide Ratings"
  }
  else{
	scoresDiv.style.display = "none"
	showHide.innerHTML = "Display Ratings"
  }
})


