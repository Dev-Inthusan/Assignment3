
// dark mode/////
function myFunction() {
  const element = document.body;
  element.classList.toggle("dark-mode");
}
// 
// zoom
function zoom(element){
  element.classList.toggle("zoomin");
}

// filter img
const filtbuttons =document.querySelectorAll(".product-title button");
const filtproducts =document.querySelectorAll(".products .card");


const filterproduct = e =>{
  document.querySelector(".active2").classList.remove("active2");
  e.target.classList.add("active2");


  filtproducts.forEach(card => {
    card.classList.add("hide");

    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "featured") {
      card.classList.remove("hide");
      
    };

  });
};

filtbuttons.forEach(button => button.addEventListener("click", filterproduct))

// map indicate/////
  function initMap() {
    var options= {
      zoom:20,
      center:{lat:9.657770,lng:80.159210}
    }
    var googlemap = new google.maps.Map(document.getElementById("map"), options);
  }
  // ////////////