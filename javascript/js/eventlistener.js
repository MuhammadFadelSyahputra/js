function coba() {
    console.log("coba eventlistener")
}

//judul.addEventListener("click", coba)

//judul.anmouseover = coba;

judul.onmouseover = function () {
    console.log("coba function anonymous");
};
