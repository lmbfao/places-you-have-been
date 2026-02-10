function place (location, landmarks, time, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
}

place.prototype.info = function() {
  return `
  Location: ${this.location}
  Landmarks: ${this.landmarks}
  Time: ${this.time}
  Notes: ${this.notes}
  `
}

function trip () {
  this.places = [];
}

trip.prototype.addPlace = function(place) {
  this.places.push(place);
}

//UI LOGIC

const myTrip = new trip();

myTrip.addPlace(new place("Dubai", "Burj Khalifa", "December 2016", " Can't wait to see the tallest building in the world!"));
myTrip.addPlace(new place("Florida", "Disney World", "April 2017", "Looking forward to the rides!"));
myTrip.addPlace(new place("Johannesburg", "Red bus tour", "November 2024", "Looking forward to exploring the city!"));
myTrip.addPlace(new place("Kuala Lumpur", "Petronas Towers", "April 2025", "Can't wait to see the tallest twin towers in the world!"));


const placesList = document.getElementById("places-list");
myTrip.places.forEach(place => {
  const listItem = document.createElement("li");
  listItem.textContent = place.info();
  placesList.appendChild(listItem);
});

const detailsSection = document.getElementById("details");
placesList.addEventListener("click", function(event) {
  if (event.target.tagName === "li") {
    detailsSection.innerHTML = event.target.textContent;
  }
});