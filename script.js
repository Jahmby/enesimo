function testFunction() {
    var x = document.getElementsByClassName("mycontainer");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
}