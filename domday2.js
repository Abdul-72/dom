// let a = document.getElementById("heading");
// console.log(a.innerText);
function change() {
    let  a = document.getElementById("heading")
    a.innerHTML = "DOM"
    a.style.color="red"
}

function update () {
    // first task
    // to create Element you have to use .createElement("htmltagname") and to give a class to it use .setAttribute("class[key]","classname")
    let childdiv = document.createElement("div")

    childdiv.setAttribute("class","example")
    childdiv.innerText = "in the name of allah"
    childdiv.style.color = "white"
    
    // secound task 

    // push it inside a parent div 
    // to push it inside the parent div create a varible and write document.getElements and then use appencdchild("write the variable of child") 

    let parentdiv = document.getElementById("parent")
    parentdiv.appendChild(childdiv)
}