
//Getting an HTML element by his class name and manipulate it with JS 👇
function testFunction() {
    var x = document.getElementsByClassName("mycontainer");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
}

//Getting an HTML element by his id name and manipulating it with JS 👇
function displayResult () {
    document.getElementById("myHeader").innerHTML = "Have a nice day!";
}
