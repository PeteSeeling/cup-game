// import functions

//Dom elements
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

const img1 = document.getElementById('cup-img1');
const img2 = document.getElementById('cup-img2');
const img3 = document.getElementById('cup-img3');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById("losses");
const totalEL = document.getElementById('total');
const winningCupImgId = document.getElementById('winningCupImgId');


// let state
let wins = 0;
let total = 0;
let losses = 0;


const cupImgIds = [
  'cup-img1',
  'cup-img2',
  'cup-img3'
];


// set event listeners 
//button 1 event listener
button1.addEventListener('click', () => {
  
  handleGuess('cup-img1');
  
  })
  
  //button 2 event listener
  button2.addEventListener('click', () => {
    handleGuess('cup-img2');
  
  })
    //button 3 event listner 
    button3.addEventListener('click', () => { 
      handleGuess('cup-img3');
    
  })
    
  function handleGuess(){
    resetImages();
    total++;
    
    const randomCupNumber = Math.floor(Math.random () *3);
    const winningCupImgId =cupImgIds[randomCupNumber];
    const winningImgEl= document.getElementById(winningCupImgId);

    if (winningCupImgId === randomCupNumber){
      wins++;
    }

  if (winningCupImgId === 'cup-img1'){
    winningImgEl.src = './assets/correct-cup.png';
  }

  if  (winningCupImgId === 'cup-img2'){
    winningImgEl.src = './assets/correct-cup.png';
  }

  if (winningCupImgId === 'cup-img3'){
    winningImgEl.src = './assets/correct-cup.png';
    
  }
 
  console.log(winningCupImgId,);


  totalEL.textContent = total;
    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
  }
  
  function resetImages() {
    img1.src = './assets/cup.png';
    img2.src = './assets/cup.png';
    img3.src = './assets/cup.png';
  }