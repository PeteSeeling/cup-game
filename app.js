// import functions and grab DOM elements
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const img1 = document.getElementById('cup-img1');
const img2 = document.getElementById('cup-img2');
const img3 = document.getElementById('cup-img3');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEL = document.getElementById('total');
// let state
let wins = 0;
let total = 0;
// set event listeners 
button1.addEventListener('click', () => {
  
  resetImages();
  total++;

  const randomCupNumber = Math.floor(Math.random() *3);
  if (randomCupNumber === 0){
    wins++;
    img1.src = './assets/correct-cup.png';
    displayWinsLosssesAndTotal();
  }
  else if (randomCupNumber === 1){
    img2.src = './assets/correct-cup.png';
  }
  else{
    img3.src = './assets/correct-cup.png';
  }
  
  })
  
  button2.addEventListener('click', () => {
    resetImages();
    total++;
  
    const randomCupNumber = Math.floor(Math.random() *3);
    if (randomCupNumber === 1){
      wins++;
      img2.src = './assets/correct-cup.png';
      displayWinsLosssesAndTotal();
    }
    else if (randomCupNumber === 0){
      img1.src = './assets/correct-cup.png';
    }
    else{
      img3.src = './assets/correct-cup.png';
    }

    button3.addEventListener('click', () => {
      resetImages();
      total++;
    
      const randomCupNumber = Math.floor(Math.random() *3);
      if (randomCupNumber === 2){
        wins++;
        img3.src = './assets/correct-cup.png';
        displayWinsLosssesAndTotal();
      }
      else if (randomCupNumber === 0){
        img1.src = './assets/correct-cup.png';
      }
      else{
        img2.src = './assets/correct-cup.png';
      }

 
    })
  // get user input
  // use user input to update state 
  function displayWinsLosssesAndTotal() {
    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
    totalEL.textContent = total;
  }

  function resetImages() {
    img1.src = './assets/cup.png';
    img2.src = './assets/cup.png';
    img3.src = './assets/cup.png';
  }})

  // update DOM to reflect the 
