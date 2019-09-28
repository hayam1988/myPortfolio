
// Modal one: chatbot

var btn = document.getElementById("myBtn");

var modal = document.getElementById("myModal");


// Modal two: daily budget app

var btn1 = document.getElementById("myBtn1");

var modal1 = document.getElementById("myModal1");


// Modal three: daily budget app

var btn2 = document.getElementById("myBtn2");

var modal2 = document.getElementById("myModal2");

// Modal four: Uw parking pal

var btn3 = document.getElementById("myBtn3");

var modal3 = document.getElementById("myModal3");

// Modal five: UWB Website redesign

var btn4 = document.getElementById("myBtn4");

var modal4 = document.getElementById("myModal4");

// About Me 

var btn5 = document.getElementById("myBtn5");

var modal5 = document.getElementById("myModal5");


btn1.onclick = function() {

  modal1.style.display = "block";

}


btn.onclick = function() {

  modal.style.display = "block";

}


btn2.onclick = function() {

  modal2.style.display = "block";

}

btn3.onclick = function() {

  modal3.style.display = "block";

}

btn4.onclick = function() {

  modal4.style.display = "block";

}

btn5.onclick = function() {

  modal5.style.display = "block";

}

var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];

span.onclick = function() {

  modal.style.display = "none";

}   


span1.onclick = function() {

  modal1.style.display = "none";

}

span2.onclick = function() {

  modal2.style.display = "none";

}

span3.onclick = function() {

  modal3.style.display = "none";

}

span4.onclick = function() {

  modal4.style.display = "none";

}

span5.onclick = function() {

  modal5.style.display = "none";

}
window.onclick = function(event) {

  if (event.target == modal || event.target == modal1 || event.target == modal2 || event.target == modal3 || event.target == modal4 || event.target == modal5) {

    modal.style.display = 'none';
    modal1.style.display = 'none';
    modal2.style.display = 'none';
    modal3.style.display = 'none';
    modal4.style.display = 'none';
    modal5.style.display = 'none';
  }

}



