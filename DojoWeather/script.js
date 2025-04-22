function dispalyAlert(element){
    var city=element.textContent;

    alert(city+" weather");
}
function acceptCookies(){
    document.querySelector("footer").remove();
}
function convert(){
    var unit=document.querySelector("select").value;
    console.log(unit);
    var degrees=[document.querySelector("#left-span1"),
        document.querySelector("#left-span2"),/*if we add .textcontent here it becomes an array of normal values not DOM elements or DOM elements textContent (the content of the span will not change*/ 
        document.querySelector("#left-span3"),
        document.querySelector("#left-span4"),
        document.querySelector("#right-span1"),
        document.querySelector("#right-span2"),
        document.querySelector("#right-span3"),
        document.querySelector("#right-span4")
    ];
    
        for(let i=0;i<8;i++){
            if(unit=="F"){
                degrees[i].textContent=((degrees[i].textContent*9/5)+32).toFixed(0) ;
                console.log(degrees[i].textContent +"F");
            }
            else{
                degrees[i].textContent=((degrees[i].textContent-32)*5/9).toFixed(0);
            console.log(degrees[i].textContent +"C");
            }
            
        }
}
    

    

