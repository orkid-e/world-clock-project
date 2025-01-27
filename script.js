function updateTime() {
// london 
let londonElement = document.querySelector("#london");
if (londonElement) {
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz ("Europe/London")

londonDateElement.innerHTML = londonTime.format("dddd, Do MMMM YYYY")
londonTimeElement.innerHTML = `${londonTime.format("HH:mm:ss")}
                                <small>${londonTime.format("A")} </small>`;
}
                                                        
// paris 
let parisElement = document.querySelector("#paris");
if (parisElement) {
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz ("Europe/Paris")

parisDateElement.innerHTML = parisTime.format("dddd, Do MMMM YYYY")
parisTimeElement.innerHTML = `${parisTime.format("HH:mm:ss")}
                                <small>${parisTime.format("A")} </small>`;
                            }

// tehran 
let tehranElement = document.querySelector("#tehran");
if (tehranElement) {
let tehranDateElement = tehranElement.querySelector(".date");
let tehranTimeElement = tehranElement.querySelector(".time");
let tehranTime = moment().tz ("Asia/Tehran")

tehranDateElement.innerHTML = tehranTime.format("dddd, Do MMMM YYYY")
tehranTimeElement.innerHTML = `${tehranTime.format("HH:mm:ss")}
                                <small>${tehranTime.format("A")} </small>`;
}

// oslo
let osloElement = document.querySelector("#oslo");
if (osloElement) {
let osloDateElement = osloElement.querySelector(".date");
let osloTimeElement = osloElement.querySelector(".time");
let osloTime = moment().tz ("Europe/Oslo")

osloDateElement.innerHTML = osloTime.format("dddd, Do MMMM YYYY")
osloTimeElement.innerHTML = `${osloTime.format("HH:mm:ss")}
                                <small>${osloTime.format("A")} </small>`;
}
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = cityTimeZone;
    citiesElement.innerHTML = `
    <div class ="city">
    <div>
    <h2> ${cityTimeZone} </h2>
    <div class ="date"> ${cityTime.format("dddd, Do MMMM YYYY")} </div>
</div>
    <div class="time"> ${cityTime.format("HH:mm:ss")} <small> ${cityTime.format("A")} </small> </div>
</div>
`;}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity)