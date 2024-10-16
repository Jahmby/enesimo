function testFunction() {
    var x = document.getElementByClassName("city");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
}