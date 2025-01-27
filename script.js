function updateTime() {
// london 
let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz ("Europe/London")

londonDateElement.innerHTML = londonTime.format("dddd, Do MMMM YYYY")
londonTimeElement.innerHTML = `${londonTime.format("HH:mm:ss")}
                                <small>${londonTime.format("A")} </small>`;
                            
                                
// paris 
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz ("Europe/Paris")

parisDateElement.innerHTML = parisTime.format("dddd, Do MMMM YYYY")
parisTimeElement.innerHTML = `${parisTime.format("HH:mm:ss")}
                                <small>${parisTime.format("A")} </small>`;

// tehran 
let tehranElement = document.querySelector("#tehran");
let tehranDateElement = tehranElement.querySelector(".date");
let tehranTimeElement = tehranElement.querySelector(".time");
let tehranTime = moment().tz ("Asia/Tehran")

tehranDateElement.innerHTML = tehranTime.format("dddd, Do MMMM YYYY")
tehranTimeElement.innerHTML = `${tehranTime.format("HH:mm:ss")}
                                <small>${tehranTime.format("A")} </small>`;


// oslo
let osloElement = document.querySelector("#oslo");
let osloDateElement = osloElement.querySelector(".date");
let osloTimeElement = osloElement.querySelector(".time");
let osloTime = moment().tz ("Europe/Oslo")

osloDateElement.innerHTML = osloTime.format("dddd, Do MMMM YYYY")
osloTimeElement.innerHTML = `${osloTime.format("HH:mm:ss")}
                                <small>${osloTime.format("A")} </small>`;
}
updateTime();
setInterval(updateTime, 1000);