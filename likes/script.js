

var nbrOfLikes=[9,12,9];
var spans=[document.querySelector("#post1"),
     document.querySelector("#post2"),
     document.querySelector("#post3")]


function like(id){
   /* nbrOfLikes[id]++;*/
    spans[id].textContent=nbrOfLikes[id] +1;
    

    

}
/*var nbr=document.querySelector("#post1");
function like(){
     
    nbr.textContent=+nbr.textContent + 1

}*/