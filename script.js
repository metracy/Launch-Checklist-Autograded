window.addEventListener("load", function() {
    // Fixed DOM query form, was using 'click' and Submit button instead of form. // let form = document.querySelector("form");
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        let list = document.getElementById("faultyItems");
        let pilotName = document.querySelector("input[name=pilotName]").value;
        let copilotName = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
        let checkPilot = validateInput(pilotName);
        let checkCopilot = validateInput(copilotName);
        let checkFuelLevel = validateInput(fuelLevel);
        let checkCargoLevel = validateInput(cargoMass);

        event.preventDefault();
        if (checkPilot == "Empty" || checkPilot == 'Is a Number') {
            alert("Pilot field missing or number entered!!!");
            event.preventDefault();
        }
        else if (checkCopilot == "Empty" || checkCopilot == 'Is a Number') {
            alert("Copilot field missing or number entered!!");
            event.preventDefault();
        }
        else if (checkFuelLevel == "Empty" || checkFuelLevel == 'Not a Number' ) {
            alert("fuelLevel field missing or non-number entered!!");
            event.preventDefault();
        }
        else if (checkCargoLevel == "Empty" || checkCargoLevel == 'Not a Number') {
            alert("cargoMass field missing or non-number entered!!");
            event.preventDefault();
        }
        else {
            formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
        }
    });
    
let listedPlanets;
// Set listedPlanetsResponse equal to the value returned by calling myFetch()
let listedPlanetsResponse = myFetch();
listedPlanetsResponse.then(function (result) {
    // error on graded test from putting <span> into code - fixed and removed
    listedPlanets = result;
    }).then(function () {
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let destination = pickPlanet(listedPlanets);
        addDestinationInfo(document, destination.name, destination.diameter, destination.star, destination.distance, destination.moons, destination.image);
    })
});