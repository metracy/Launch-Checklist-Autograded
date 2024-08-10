// Write your helper functions here!

require('cross-fetch/polyfill');

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
    if (testInput == "") {
        return "Empty";
    }
    else if (isNaN(Number(testInput))) {
        return "Not a Number"
    }
    else if (typeof Number(testInput) == "number") {
        return "Is a Number"
    }
}
 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // check pilot, copilot, fuelLevel, and cargoLevel for correct typeof content
    if (validateInput(pilot) == "Empty") {
        
    }
    else if (validateInput(copilot) == "Empty") {
        
    }
    else if (validateInput(fuelLevel) == "Not a Number") {
        
    }
    else if (validateInput(cargoLevel) == "Not a Number") {
        
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