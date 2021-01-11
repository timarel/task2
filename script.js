let count = 0;
document.getElementById("square").addEventListener("click", function (e) {
    count += 1;
    document.getElementById("counter").innerHTML = count; 
})