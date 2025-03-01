document.getElementById("Increase").addEventListener("click", function(){
    let pre = parseInt(document.getElementById("Counter").innerHTML)
    pre += 1
    document.getElementById("Counter").textContent = pre.toString()
    document.getElementById("Counter").style.backgroundColor = whit
    
})

document.getElementById("Decrease").addEventListener("click", function(){
    let pre = parseInt(document.getElementById("Counter").innerHTML)
    pre -= 1
    document.getElementById("Counter").textContent = pre.toString()
})

document.getElementById("Reset").addEventListener("click", function(){
    
    document.getElementById("Counter").textContent = 0
})
