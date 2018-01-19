console.log('got here');

var pic = document.getElementsByTagName('img')[0];

console.log(pic);



var button = document.getElementsByTagName("button")[0];
var problem = document.getElementById('problem');

var problems = ["you messed up", "you drank yourself to death"];


pic.addEventListener("click", function (event) {
    console.log('clikcing working');
    var randomNum = Math.floor(Math.random()*problems.length);

    pic.setAttribute("src", "https://www.klick.com/health/wp-content/uploads/2016/09/black-box-isolated.jpg")
    uniqueProblem = problems[randomNum];


    button.style.display = "block";
})








