function Place (location, landmarks, time, notes) {
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

//UI LOGIC

const myTrip = new Trip();

myTrip.addPlace(new Place("Dubai",
  ["Burj Khalifa"],
  // ["dubai.jpg"],
  "December 2016",
  " Can't wait to see the tallest building in the world!",
));

myTrip.addPlace(new Place("Florida",
  ["Disney World"],
  // ["florida.jpg"],
  "April 2017",
  "Looking forward to the rides!"
));

myTrip.addPlace(new Place("Johannesburg",
  ["Red bus tour"],
  // ["johannesburg.jpg"], 
  "November 2024",
  "Looking forward to exploring the city!"
));

myTrip.addPlace(new Place("Kuala Lumpur",
  ["Petronas Towers"],
  // ["kuala-lumpur.jpg"],
  "April 2025",
  "Can't wait to see the tallest twin towers in the world!"
));

const placesList = document.getElementById("places-list");

const detailsSection = document.getElementById("details-location");
const detailsLandmarks = document.getElementById("details-landmarks");
const detailsImages = document.getElementById("details-images");
const detailsTime = document.getElementById("details-time");
const detailsNotes = document.getElementById("details-notes");

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