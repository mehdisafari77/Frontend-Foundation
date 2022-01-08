let locationBtn = document.getElementById('locations')
function showLocations() {
    alert('Catopia Currently Operates In All 50 States In The US')
}

let sf = document.getElementsById('secondary-box')
function randomLocationSF() {
    var sfRestaurants = ['Cocotte', "Morton's Steakhouse", 'Chipotle', "The Cheesecake Factory"]; 
    const random = Math.floor(Math.random() * sfRestaurants.length);
    console.log(random, sfRestaurants[random]);
    randomResult =  sfRestaurants[random]
    alert(`Your random restaurant selection result: ${randomResult}`)
}

let ny = document.getElementsById('initial-box')
function randomNyLocation() {
    var nyRestaurants = ['Zuma', "Pret a Manger", "Joe's Pizza", "Hakkasan", 'Tao']; 
    const random = Math.floor(Math.random() * nyRestaurants.length);
    console.log(random, nyRestaurants[random]);
    randomResult =  nyRestaurants[random]
    alert(`Your random restaurant selection result: ${randomResult}`)
}

let la = document.getElementsById('initial-box')
function randomLaLocation() {
    var laRestaurants = ['Nusret', "Wally's", "Kinn", "De La Nonna", 'Berbere']; 
    const random = Math.floor(Math.random() * laRestaurants.length);
    console.log(random, laRestaurants[random]);
    randomResult =  laRestaurants[random]
    alert(`Your random restaurant selection result: ${randomResult}`)
}
