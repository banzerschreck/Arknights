var userData = new Object();

window.onload = function () {
  fetch("userdata.json")
    .then(res => res.json())
    .then((res) => {
      console.log(res);
      userData = res;
      displayDepot();
    });
};

function displayDepot() {
  //materials

  //chips

  //skill

  //lmd

}