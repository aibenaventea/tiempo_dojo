let cityList = document.querySelectorAll(".nav-city");
let acceptCoockie = document.querySelector(".coockie-btn");
let coockieMessage = document.querySelector(".coockie-container");
const medida = document.querySelector(".temp-list");

function cityAlert(elemento){
    alert("Loading weather report...")
}

function removeCoockie(){
    coockieMessage.remove()
}

function cAF(temp) {
    return Math.round((9 / 5 * temp) + 32);
}
function fAC(temp) {
    return Math.round(5 / 9 * (temp - 32));
}
function convert(element) {
    for(let i=1; i<9; i++) {
        let tempSpan = document.querySelector("#temp" + i);
        let tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C") {
            tempSpan.innerText = fAC(tempVal)+"°";
        } else if (element.value == "°F") {
            tempSpan.innerText = cAF(tempVal)+"°";
        }
    }
}

for (let i = 0; i < cityList.length; i++){
    cityList[i].addEventListener("click", function(){
        cityAlert(cityList[i])});
}

acceptCoockie.addEventListener("click",function(){
    removeCoockie()
});

medida.addEventListener("change", function(){
    convert(medida)
})

