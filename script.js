window.addEventListener("load", function() {
    let submitButton = document.getElementById('formSubmit');
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        let pilotName = document.getElementById('pilotName').value;
        let coPilotName = document.getElementById('copilotName').value;
        let fuelLevel = document.getElementById('fuelLevel').value;
        let cargoMass = document.getElementById('cargoMass').value;
        formSubmission(document, pilotName, coPilotName, fuelLevel, cargoMass);


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    

 });
})
