function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "0";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    // document.body.style.backgroundColor = "white";    
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~ Articles ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function openArticles() {
    // just to make things easier to write... rename this long declaration
    var tingy = document.getElementById("articles");

    if (tingy.style.display == "none") {
        tingy.style.display = "block";
    }else{
        tingy.style.display = "none";
    }
}