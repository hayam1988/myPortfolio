






// Modal one: chatbot
var btn = document.getElementById("myBtn");
var modal = document.getElementById("myModal");

btn.onclick = function() {
  modal.style.display = "block";
}


// Modal two: daily budget app
var btn1 = document.getElementById("myBtn1");
var modal = document.getElementById("myModal1");

btn1.onclick = function() {
  modal.style.display = "block";
}


// Modal three: Stacks 
var btn2 = document.getElementById("myBtn2");
var modal = document.getElementById("myModal2");

btn2.onclick = function() {
  modal.style.display = "block";
}

var span = document.getElementsByClassName("close")[0];








span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
