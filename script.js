function Place (location, landmarks, images, time, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.images = images;
  this.time = time;
  this.notes = notes;
}

Place.prototype.info = function() {
  return `
  Location: ${this.location}
  Landmarks: ${this.landmarks}
  Images: ${this.images}
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

//UI
const myTrip = new Trip();

myTrip.addPlace(new Place(
  "Kuala Lumpur, Malaysia",
  ["Petronas Towers"],
  ["images/petronas1.jpeg", "images/petronas2.jpeg" , "images/petronas3.jpeg", "images/petronas4.jpeg"],
  "April 2025",
  "The tallest twin towers in the world!"
));

myTrip.addPlace(new Place(
  "Johannesburg, South Africa",
  ["Day bus tour plus tour to Soweto"],
  ["images/SA1.jpeg", "images/SA2.jpeg", "images/SA3.jpeg", "images/SA4.jpeg"],
  "November 2024",
  "Exploring the city!"
));

myTrip.addPlace(new Place(
  "Dubai, UAE",
  ["Burj Khalifa"],
  ["images/BK1.jpeg", "images/BK2.jpeg", "images/BK3.jpeg"],
  "December 2016",
  " The tallest building in the world!",
));

//DOM MANIPULATION
const placesList = document.getElementById("places-list");
const detailsSection = document.getElementById("details-location");
const detailsLandmarks = document.getElementById("details-landmarks");
const detailsImages = document.getElementById("details-images");
const detailsTime = document.getElementById("details-time");
const detailsNotes = document.getElementById("details-notes");

//LIST
myTrip.places.forEach(place => {
  const listItem = document.createElement("li");
  listItem.textContent = place.location; 
  
  listItem.addEventListener("click", function() {
    detailsSection.textContent = place.location;
    detailsLandmarks.textContent = place.landmarks;

    detailsImages.innerHTML = "";
    place.images.forEach(image => {
      const img = document.createElement("img");
      img.src = image;
      detailsImages.appendChild(img);
    });

    detailsTime.textContent = place.time;
    detailsNotes.textContent = place.notes;
  });

  placesList.appendChild(listItem);
});