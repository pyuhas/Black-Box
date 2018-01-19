console.log('got here');

var pic = document.getElementsByTagName('img')[0];

console.log(pic);



var button = document.getElementsByTagName("button")[0];
var problem = document.getElementsByTagName('h4')[1];

var problems = ["you messed up", "you drank yourself to death"];

var whereYouWentWrong = ["The one that got away really got away.", "Maybe you shouldn't have quit that job...", "Parachute didn't deploy.", "You sold your Bitcoin low, bought high.", "Remember that one final you failed? It did matter.", "You should have listened when your mom told you not to follow your friends off that cliff.","Maybe it was too late to start again.", "Whatever doesn't kill you can sometimes actually kill you.", "Maybe the bad guys in The Mighty Ducks weren't the best role models", "You opened your mouth.", "WOW is not an excuse for unpaid bills"]


pic.addEventListener("click", function (event) {
    console.log('clikcing working');
    var randomNum = Math.floor(Math.random()*whereYouWentWrong.length);

    pic.setAttribute("src", "https://www.klick.com/health/wp-content/uploads/2016/09/black-box-isolated.jpg")
    uniqueProblem = whereYouWentWrong[randomNum];

    problem.innerHTML = uniqueProblem;

    button.style.display = "block";
})








