// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.getElementById("missionTarget").innerHTML = `<h2> Mission Destination </h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">`
}

 function validateInput(testInput) {
    if (testInput== "") {
        console.log("Is Empty");
        return "Empty";
    }
    else if (isNaN(Number(testInput))) {
        console.log("Not a Number");
        return "Not a Number";   
    }
    else {
        console.log("Is a Number");
        return "Is a Number";
    }
}
 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // The list of shuttle requirements, the div with the id faultyItems, should be updated if something is not ready for launch. Using template literals, update the li elements pilotStatus and copilotStatus to include the pilot’s name and the co-pilot’s name.
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch!`
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch!`;
    
    //If the user submits a fuel level that is too low (less than 10,000 liters), change faultyItems to visible with an updated fuel status stating that there is not enough fuel for the journey. The text of the h2 element, launchStatus, should also change to “Shuttle not ready for launch” and the color should change to red.

    // Cargo is good but Fuel is bad -> Cargo Green, Fuel Red, launchStatus Red
    if (fuelLevel < 10000 && cargoLevel < 10000) {
        list.style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("fuelStatus").style.color = "red";
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("fail").style.visibility = "visible";
        document.getElementById("bill").style.visibility = "hidden";
    }
    // Cargo is bad and Fuel is good -> Cargo Red, Fuel Green, launchStatus Red
    if (fuelLevel >= 10000 && cargoLevel >= 10000) {
        list.style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("cargoStatus").style.color = "red";
        document.getElementById("fuelStatus").style.color = "green";
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("bill").style.visibility = "hidden";
        document.getElementById("fail").style.visibility = "visible";
    }
    // Cargo is bad and Fuel is bad -> Cargo Red, Fuel Red, launchStatus Red
    if (fuelLevel < 10000 && cargoLevel >= 10000) {
        list.style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("cargoStatus").style.color = "red";
        document.getElementById("fuelStatus").style.color = "red";
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementByClassName("bill").style.visibility = "hidden";
        document.getElementByClassName("fail").style.visibility = "visible";

    }
    // Cargo is Good and Fuel is Good -> Cargo Green, Fuel Green, launchStatus Green
    if (fuelLevel >= 10000 && cargoLevel < 10000) {
        list.style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "green";
        document.getElementById("cargoStatus").style.color = "green";
        document.getElementById("fuelStatus").style.color = "green";
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        // dance time!
        document.getElementByClassName("fail").style.visibility = "hidden";
        document.getElementById("bill").style.visibility = "visible";
    }
 }
 
 async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       return response.json();
        });
    return planetsReturned;
}

function pickPlanet(planets) {
    // random index for planets
    planet = planets[Math.floor(Math.random() * planets.length)];
   return planet;
}


 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;