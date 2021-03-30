// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {  
    let targetPlanet = document.getElementById("missionTarget");
    targetPlanet.innerHTML = `<h2>Mission Destination</h2>
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
    let returnMessage;

    if(testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number"
    } else {
        return "Is a Number"
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let faultList = document.getElementById("faultyItems");
    let launchStatus = document.getElementById("launchStatus");

    if (cargoLevel > 10000 || fuelLevel < 10000) {
        faultList.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
    } else {
        faultList.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "rgb(65, 159, 106)";
    }
    
    let pilotStatus = document.getElementById("pilotStatus");
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;

    let copilotStatus = document.getElementById("copilotStatus");
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    let fuelStatus = document.getElementById("fuelStatus");
        if(fuelLevel < 10000) {
            fuelStatus.innerHTML = `Fuel level too low for launch`;
        } else {
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
        }

    let cargoStatus = document.getElementById("cargoStatus");
        if(cargoLevel > 10000) {
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
        } else {
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
        }

    
}

async function myFetch() {
    let planetsReturned = await (await fetch("https://handlers.education.launchcode.org/static/planets.json")).json();

    return planetsReturned    
}


function pickPlanet(planets) {
    return planets[Math.round(Math.random()*(planets.length-1))]
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

