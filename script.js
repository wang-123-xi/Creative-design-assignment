const animalImages = {
  'panda': 'images/Panda.jpg',
  'Elephant': 'images/Elephant.jpg',
  'Whale': 'images/Whale.jpg',
  'Butterfly': 'images/Butterfly.jpg',
  'Lion': 'images/Lion.jpg',
  'Giraffe': 'images/Giraffe.jpg',
  'Dolpin': 'images/Dolphin.jpg',
  'fox': 'images/fox.jpg',
  'Eagle': 'images/Eagle.jpg',
  'Rhinoceros': 'images/Rhinoceros.jpg',
};

const travelModeImages = {
  'Shuttle': 'images/Shuttle.jpg',
  'Jumper': 'images/Jumper.jpg',
  'Spaceship': 'images/Spaceship.jpg',
  'Tunnel': 'images/Tunnel.jpg',
  'Explorer': 'images/Explorer.jpg',
  'Glider': 'images/Glider.jpg',
  'Cosmic': 'images/Cosmic.jpg',
  'Hyper': 'images/Hyper.jpg',
  'Conveyor': 'images/Conveyor.jpg',
  'Slingshot': 'images/Slingshot.jpg',
  // ... other travel modes
};

const planetImages = {
  'mercury': 'images/mercury.jpg',
  'venus': 'images/venus.jpg',
  'mars': 'images/mars.jpg',
  'jupiter': 'images/jupiter.jpg',
  'saturn': 'images/saturn.jpg',
  'uranus': 'images/uranus.jpg',
  'neptune': 'images/neptune.jpg',
  // ... other planets
};

function generateIdea() {
  const animals = ["panda", "elephant", "whale", "butterfly", "lion", "giraffe", "dolphin", "fox", "eagle", "rhinoceros"];
  const travelModes = ["shuttle", "jumper", "spaceship", "tunnel", "explorer", "glider", "cosmic", "hyper", "conveyor", "slingshot"];
  const planets = ["mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune"];
  
  const animal = animals[Math.floor(Math.random() * animals.length)];
  const travelMode = travelModes[Math.floor(Math.random() * travelModes.length)];
  const planet = planets[Math.floor(Math.random() * planets.length)];
  
  const story = `${animal} ${travelMode} ${planet}`;
  document.getElementById('six-words-story').value = story;
  updateImage(story);
}

function updateImage(story) {
  const words = story.split(' ');
  const imageContainer = document.getElementById('image-container');
 
 
  // Clear out the previous images
  imageContainer.innerHTML = '';

  words.forEach(word => {
    const lowerCaseWord = word.toLowerCase();
    if (animalImages[lowerCaseWord]) {
      const img = document.createElement('img');
      img.src = animalImages[lowerCaseWord];
      img.alt = word;
      img.className = 'story-image'; // Ensure this class is the same as in CSS
      imageContainer.appendChild(img);
    } else if (travelModeImages[lowerCaseWord]) {
      const img = document.createElement('img');
      img.src = travelModeImages[lowerCaseWord];
      img.alt = word;
      img.className = 'story-image'; // Ensure this class is the same as in CSS
      imageContainer.appendChild(img);
    } else if (planetImages[lowerCaseWord]) {
      const img = document.createElement('img');
      img.src = planetImages[lowerCaseWord];
      img.alt = word;
      img.className = 'story-image'; // Ensure this class is the same as in CSS
      imageContainer.appendChild(img);
    }
  });
}


// Bind the generateIdea function to window load event
window.addEventListener('load', generateIdea);





