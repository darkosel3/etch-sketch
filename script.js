

const rangeInput = document.getElementById( 'sizeSlider' );
const sizeValue = document.getElementById( 'sizeValue' );
const gridContainer = document.getElementsByClassName( 'divContainer' )[0];
const clearButton = document.getElementById( 'clearBtn' );
const rainBowButton = document.getElementById( 'rainbowBtn' );
const blackButton = document.getElementById( 'blackBtn' );
const eraserButton = document.getElementById( 'eraserBtn' );
let type;
let currentSize;
var mouseIsDown = false;

const clearDivs = function () {
  gridContainer.querySelectorAll( 'div' ).forEach( e => e.style.backgroundColor = 'white' );
  mouseIsDown = false;
};

const updateSizeValue = function ( input ) {
  sizeValue.innerText = `${input} x ${input}`;
};

const colorGrid = function ( e ) {
  if ( mouseIsDown ) {
    if ( type === 'black' ) {
      this.style.backgroundColor = 'black';
    }
    else if ( type === 'rainbow' ) {
      this.style.backgroundColor = randomRGBN();
    } else {
      this.style.backgroundColor = 'white';
    }
  }
};

const randomRGBN = function () {
  let r = Math.floor( Math.random() * 255 );
  let g = Math.floor( Math.random() * 255 );
  let b = Math.floor( Math.random() * 255 );
  return `rgb(${r} ${g} ${b})`;
};

const rainBow = function () {
  type = 'rainbow';
  clearDivs();
};
const blackColor = function () {
  type = 'black';
  clearDivs();
};
const whiteColor = function () {
  console.log( "11" );
  type = 'white';
};


const updateGrid = function ( gridNumber ) {
  let gridArea = gridNumber * gridNumber;
  gridContainer.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
  for ( let i = 0; i < gridArea; i++ ) {
    let gridItem = document.createElement( 'div' );
    gridContainer.insertAdjacentElement( 'beforeend', gridItem );
    gridItem.style.backgroundColor = 'white';
  }
  let gridPixels = gridContainer.querySelectorAll( 'div' );

  gridPixels.forEach( gridPixel => gridPixel.addEventListener( 'mouseover', colorGrid ) );
  type = 'black';
};


rangeInput.oninput = function ( e ) {
  clearDivs();
  currentSize = e.target.value;
  updateSizeValue( e.target.value );
  updateGrid( e.target.value );
};



gridContainer.addEventListener( 'mousedown', function () { mouseIsDown = true; } );
document.addEventListener( 'mouseup', function () { mouseIsDown = false; } );
clearButton.addEventListener( 'click', clearDivs );
rainBowButton.addEventListener( 'click', rainBow );
blackButton.addEventListener( 'click', blackColor );
eraserButton.addEventListener( 'click', whiteColor );
updateGrid( 16 );


