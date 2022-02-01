// let count =0
function hitme () {

  let under =   document.getElementById("i").value ;
//   console.log(u);
    // let arrr =  ["in","the","name","of Allah","who is ","the most mercifull"]
    let children = document.createElement("div");
    children.setAttribute("class","child");
    
    children.innerHTML = `<h1>${under}</h1>`


    let father = document.getElementById("na") ;
    father.appendChild(children) ;
    // console.log(father);
    // count++
}
