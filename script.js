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

let place1 = new place('Paris', 'Eiffel Tower', 'Spring 2020', 'It was a great trip!');

