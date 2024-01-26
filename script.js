const animalImages = {
  'panda': 'images/Panda.jpg',
  'elephant': 'images/elephant.jpg',
  'whale': 'images/whale.jpg',
  'butterfly': 'images/butterfly.jpg',
  'lion': 'images/lion.jpg',
  'giraffe': 'images/giraffe.jpg',
  'dolphin': 'images/dolphin.jpg',
  'fox': 'images/fox.jpg',
  'eagle': 'images/eagle.jpg',
  'rhinoceros': 'images/rhinoceros.jpg',
};

const travelModeImages = {
  'shuttle': 'images/shuttle.jpg',
  'jumper': 'images/jumper.jpg',
  'spaceship': 'images/spaceship.jpg',
  'tunnel': 'images/tunnel.jpg',
  'explorer': 'images/explorer.jpg',
  'glider': 'images/glider.jpg',
  'cosmic': 'images/cosmic.jpg',
  'hyper': 'images/hyper.jpg',
  'conveyor': 'images/conveyor.jpg',
  'slingshot': 'images/slingshot.jpg',
 
};

const planetImages = {
  'mercury': 'images/mercury.jpg',
  'venus': 'images/venus.jpg',
  'mars': 'images/mars.jpg',
  'jupiter': 'images/jupiter.jpg',
  'saturn': 'images/saturn.jpg',
  'uranus': 'images/uranus.jpg',
  'neptune': 'images/neptune.jpg',

};

function generateIdea() {
  const animals = ["panda", "elephant", "whale", "butterfly", "lion", "giraffe", "dolphin", "fox", "eagle", "rhinoceros"];
  const travelModes = ["shuttle", "jumper", "spaceship", "tunnel", "explorer", "glider", "cosmic", "hyper", "conveyor", "slingshot"];
  const planets = ["mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune"];
  
  const animal = animals[Math.floor(Math.random() * animals.length)];
  const travelMode = travelModes[Math.floor(Math.random() * travelModes.length)];
  const planet = planets[Math.floor(Math.random() * planets.length)];
  
  const story = `${animal} uses ${travelMode} fly to ${planet}`;
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





