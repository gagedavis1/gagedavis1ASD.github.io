// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilterNoBackground(reddify);
  keepInBounds();
  applyFilterNoBackground(reddify);
  applyFilterNoBackground(decreaseBlue);
  applyFilterNoBackground(increaseGreenByBlue);


  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction){
  for (var i = 0; i < image.length; i++) {
    for (var j = 0; j < image[i].length; j++) {
      var rgbString = image[i][j]
      var rgbNumbers = rgbStringToArray(rgbString);
      filterFunction(rgbNumbers);
      //rgbNumbers[GREEN] = 0
      rgbString = rgbArrayToString(rgbNumbers);
      image[i][j] = rgbString;

    }
  }
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction){

  var backgroundColor = rgbStringToArray(image[0][0])
  
  for (var i = 0; i < image.length; i++) {
    for (var j = 0; j < image[i].length; j++) {
    var rgbString = image[i][j]
    var rgbNumbers = rgbStringToArray(rgbString)
      if (!arraysEqual(rgbNumbers, backgroundColor)){
        filterFunction(rgbNumbers);
      }

      rgbString = rgbArrayToString(rgbNumbers);
      image[i][j] = rgbString
    }
  }
}

function arraysEqual(arr1, arr2){
  return arr1[RED] === arr2[RED] && arr1[GREEN] === arr2[GREEN]
}

function applyAndRender(){
  applyFilterNoBackground(reddify);
  keepInBounds();
  applyFilterNoBackground(reddify);
  applyFilterNoBackground(decreaseBlue);
  applyFilterNoBackground(increaseGreenByBlue);

  //render the last bit (the image)
  render($("#display"), image);
}

// TODO 5: Create the keepInBounds function
function keepInBounds(x){
  return x > 255 ? 255 : x < 0 ? 0 : x ;
}

// TODO 3: Create reddify function
function reddify(arr){
  arr[RED] = 200;
}

// TODO 6: Create more filter functions
function decreaseBlue(arr2){
  arr2[BLUE] = keepInBounds(arr2[BLUE] - 50);
}

function increaseGreenByBlue(arr2){
  arr2[GREEN] = keepInBounds(arr2[GREEN] + arr2[BLUE]);
}
// CHALLENGE code goes below here

//Nah im good :)