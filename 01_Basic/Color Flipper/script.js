

document.getElementsByTagName("button")[0].addEventListener("click", function() {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log(color);
    document.body.style.backgroundColor = color;
    document.getElementById("color").innerHTML = color
    // You can also set the background color of the button or any other element
    // document.body.style.backgroundColor = color;
});