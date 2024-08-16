// Write your helper functions here!

//require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }

 function validateInput(testInput) {
    if (testInput== "") {
        return "Empty";
    }
    else if (isNaN(Number(testInput))) {
        return "Not a Number";
    }
    else if (typeof Number(testInput) == "number") {
        return "Is a Number";
    }
}
 
function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
    // check pilot, copilot, fuelLevel, and cargoLevel for correct content
    let checkPilot = validateInput(pilot);
    let checkCopilot = validateInput(copilot);
    let checkFuelLevel = validateInput(fuelLevel);
    let checkCargoLevel =  validateInput(cargoLevel);

    if (checkPilot == "Empty") {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("pilotStatus").innerHTML = "Pilot name empty.";
    }
    if (checkCopilot == "Empty") {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("copilotStatus").innerHTML = "Co-pilot name empty.";
    }
    if (checkFuelLevel == "Not a Number") {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = "Fuel level is not a number";
    }
    if (checkCargoLevel == "Not a Number") {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("cargoStatus").innerHTML = "Cargo level is not a Number";
    }


 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;