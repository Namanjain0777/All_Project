document.getElementsByTagName("button")[0].addEventListener("click", function() {
    const navCon = document.getElementsByClassName("nav-con")[0];
    if (navCon.style.display === "none" || navCon.style.display === "") {
        navCon.style.display = "flex";
    } else {
        navCon.style.display = "none";
    }
});
