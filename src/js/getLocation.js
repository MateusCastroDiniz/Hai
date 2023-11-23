if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(getLocal)

}

function getLocal(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    console.log(`${lat}; ${long}`)
}