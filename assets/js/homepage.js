var getUserRepos = function(user) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // make a request to the url
    fetch(apiUrl).then(function(response) {
        console.log(response);
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

var formSubmitHandler = function(event) {
    event.preventDefault();
    // get value from input element (trim helps if there's an accidental space)
    var username = nameInputEl.value.trim();

    if (username) {
        getUserRepos(username);
        //after passing data as argument, clear the form
        nameInputEl.value="";
    } else {
        alert("Please enter a GitHub username");
    }
    console.log(event);
};

userFormEl.addEventListener("submit", formSubmitHandler);