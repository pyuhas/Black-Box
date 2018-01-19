var peace = document.getElementsByTagName('img')[0];

console.log(peace);

var quote = document.getElementById("quote");

var url = 'https://api.unsplash.com/search/photos/?query="peace"';

// 6dd150a918b93625ee9175c6fb0b98f72194684f33501f5a62cec89cefb164ae

fetch(url, {
    method: 'get',
    headers: new Headers({"Authorization": "Client-ID 1691c26c1e8849ca17e8eee38b7b80d343b6d261eb72bb84b8cd13e34eca7982", "Content-Type": "application/json"})
}).then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data.results);
    
    var randomNum = Math.floor(Math.random()*data.results.length)

    console.log(randomNum);
    

    var newPic = data.results[randomNum].urls.regular

    console.log(newPic);
    
    peace.setAttribute("src", newPic)

    // let hiddenP = document.getElementsByTagName('p')[0];
    // hiddenP.innerText = data.data.message;
}).then(function (data) {
    console.log('got here');
      
    quote.innerHTML="this will be quote";
    
});



// peace.setAttribute("src", "https://images.unsplash.com/photo-1448321098004-dee4b0698c80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE5NjkzfQ%3D%3D&s=f64524b3861670e2e28ed9b123c2d3e6")




