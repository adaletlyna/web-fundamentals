
var request=[document.querySelector(".request1"),document.querySelector(".request2")]
var requestsNbr=document.querySelector("#requests-nbr")
function Request(num){
    request[num].remove();
    requestsNbr.textContent=requestsNbr.textContent-1;


}
var profileName=document.querySelector("#profile-name");
function changeProfileName(){
    profileName.textContent="Lyna Adalet";
}