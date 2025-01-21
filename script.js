 // rotating carousel of words
 const illnesses = [
    "COVID-19 Symptoms",
    "Flu Symptoms",
    "Chronic Pain",
    "Sports Injuries",
    "Headaches",
    "Respiratory Issues",
    "That Weird Looking Rash"
  ];
  let currentIndex = 0;

  function rotateIllness() {
    const illnessElement = document.getElementById("illness-carousel");
    currentIndex = (currentIndex + 1) % illnesses.length;
    illnessElement.textContent = illnesses[currentIndex];
  }

//change every 3 secs
  setInterval(rotateIllness, 3000);


    