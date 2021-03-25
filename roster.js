window.onload = function () {
  fetch("userdata.api")
    .then(res => res.json())
  .then(json=>console.log(json))
};


function displayRoster() {
  //const rosterTable = document.getElementById("rosterTable");
  //for (var i = 0; i < data.length)
}