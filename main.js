

// function test(){
//   document.querySelector('.hide').style.display = 'none'
    
// }
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}
function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// function bigImg(){
//   let img = document.querySelector('#test').style.visibility = "visible";
//   // document.querySelector('#test').style.background = "#f38181"

// }
// function normalImg(){
//   let img = document.querySelector('#test').style.visibility = "hidden"
// }