
function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
 
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
 
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";

   // Show the container element (hidden with CSS)
 expandImg1.parentElement.style.display = "block";

   // Show the container element (hidden with CSS)
   expandImg2.parentElement.style.display = "block";
} 



function myFunc1(imgs) {
  // Get the expanded image
  var expandImg1 = document.getElementById("expandedImg1");
 
  // Get the image text
  var imgText = document.getElementById("imgtext1");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg1.src = imgs.src;
 
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg1.parentElement.style.display = "block";
}


function myFunc2(imgs) {
  // Get the expanded image
  var expandImg2 = document.getElementById("expandedImg2");
 
  // Get the image text
  var imgText = document.getElementById("imgtext2");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg2.src = imgs.src;
 
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg2.parentElement.style.display = "block";
}

function myFunc3(imgs) {
  // Get the expanded image
  var expandImg3 = document.getElementById("expandedImg3");
 
  // Get the image text
  var imgText = document.getElementById("imgtext3");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg3.src = imgs.src;
 
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  
  // Show the container element (hidden with CSS)
  expandImg3.parentElement.style.display = "block";
}