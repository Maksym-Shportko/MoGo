

// function test(){
//   document.querySelector('.hide').style.display = 'none'
    
// }
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    
var elt = document.querySelector('#toggle')

elt.style.transform = elt.style.transform == "rotate(180deg)"?"rotate(0deg)":"rotate(180deg)";

}
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
    var elt = document.querySelector('#toggle2')

elt.style.transform = elt.style.transform == "rotate(180deg)"?"rotate(0deg)":"rotate(180deg)";

}
function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
    var elt = document.querySelector('#toggle3')

elt.style.transform = elt.style.transform == "rotate(180deg)"?"rotate(0deg)":"rotate(180deg)";

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