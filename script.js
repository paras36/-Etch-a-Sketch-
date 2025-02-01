let container = document.getElementById("container");
let total_sq = prompt("enter grid dimensions") ;

if (total_sq<=100) {
    
    create_sq(total_sq);
    
}
else {
    alert("100 ke andar daal lawde");
}


function create_sq(num) {
    container.innerHTML = "";
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
         let div =  document.createElement("div");
         div.className="div";
         container.appendChild(div);
         let sq = 600/num;
         div.style.width=`${sq}px`;
         div.style.height=`${sq}px`;

    
        }
        
    }
    let divSq = document.querySelectorAll(".div")
for (let i = 0; i < divSq.length; i++) {
    divSq[i].addEventListener("mouseover",function hover(e){
        divSq[i].style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+","+e.offsetY+")"; 
        divSq[i].style.opacity="60%";
    });
    
}
}

let res_btn = document.querySelector("#reset_button");
res_btn.addEventListener("click",function reset(){
    
    total_sq=16;
    create_sq(total_sq);

})
