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

let wins = 0;
let total = 0;
let losses = 0;


const cupImgIds = [
  'cup-img1',
  'cup-img2',
  'cup-img3',
];




export function handleGuess(){
    
    resetImages();
    displayWinsLosses();
    getRandomItem();
    total++;
    console.log();
   // let correctSpot = getRandomItem[cupImgIds];
    //const randomCupNumber = Math.floor(Math.random () *3);
    
    //const winningCupImgId =cupImgIds[randomCupNumber];
    //const winningImgEl= document.getElementById(winningCupImgId);

    //console.log(randomCupNumber,winningCupImgId);
    if (  cupImgIds === winningCupImgId){
      wins++;
      
        if (winningCupImgId === 'cup-img1'){
          winningImgEl.src = './assets/correct-cup.png';
        }
      
        if  (winningCupImgId === 'cup-img2'){
          winningImgEl.src = './assets/correct-cup.png';
        }
      
        if (winningCupImgId === 'cup-img3'){
          winningImgEl.src = './assets/correct-cup.png';
          
        }

    }}

   function getRandomItem(arr) {
 let winningCupImgId = Math.floor(Math.random()*cupImgIds.length);
       return winningCupImgId[cupImgIds];
   }
   console.log(winningCupImgId);

    
  function displayWinsLosses(){
  totalEL.textContent = total;
    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
  }
  
  function resetImages() {
    img1.src = './assets/cup.png';
    img2.src = './assets/cup.png';
    img3.src = './assets/cup.png';
  }

  


  


  