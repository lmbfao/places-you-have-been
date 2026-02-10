function Place (location, landmarks, time, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
}

Place.prototype.info = function() {
  return `
  Location: ${this.location}
  Landmarks: ${this.landmarks}
  Time: ${this.time}
  Notes: ${this.notes}
  `
}

function Trip () {
  this.places = [];
}

Trip.prototype.addPlace = function(place) {
  this.places.push(place);
}

//UI LOGIC

const myTrip = new Trip();

myTrip.addPlace(new Place("Dubai",
  ["Burj Khalifa"],
  "December 2016",
  " Can't wait to see the tallest building in the world!"));

myTrip.addPlace(new Place("Florida",
  ["Disney World"],
  "April 2017",
  "Looking forward to the rides!"));

myTrip.addPlace(new Place("Johannesburg",
  ["Red bus tour"],
  "November 2024",
  "Looking forward to exploring the city!"));

myTrip.addPlace(new Place("Kuala Lumpur",
  ["Petronas Towers"],
  "April 2025",
  "Can't wait to see the tallest twin towers in the world!"));

const placesList = document.getElementById("places-list");

const detailsSection = document.getElementById("details-text");

myTrip.places.forEach(place => {
  const listItem = document.createElement("li");
  listItem.textContent = place.location;
  
  listItem.addEventListener("click", function() {
    detailsSection.textContent = place.info();
  });
  placesList.appendChild(listItem);
});