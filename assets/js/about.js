// City operations button alert
let locationBtn = document.getElementById('locations')
function showLocations() {
    alert('Catopia Currently Operates In All 50 States In The US')
}

// San Francisco Random Restaurant Selector Alert
let sf = document.getElementsById('secondary-box')
function randomLocationSF() {
    var sfRestaurants = ['Cocotte', "Morton's Steakhouse", 'Chipotle', "The Cheesecake Factory"]; 
    const random = Math.floor(Math.random() * sfRestaurants.length);
    console.log(random, sfRestaurants[random]);
    randomResult =  sfRestaurants[random]
    alert(`${randomResult}`)
}

// New York Random Restaurant Selector Alert
let ny = document.getElementsById('initial-box')
function randomNyLocation() {
    var nyRestaurants = ['Zuma', "Pret a Manger", "Joe's Pizza", "Hakkasan", 'Tao']; 
    const random = Math.floor(Math.random() * nyRestaurants.length);
    console.log(random, nyRestaurants[random]);
    randomResult =  nyRestaurants[random]
    alert(`${randomResult}`)
}

// Los Angeles Random Restaurant Selector Alert
let la = document.getElementsById('initial-box')
function randomLaLocation() {
    var laRestaurants = ['Nusret', "Wally's", "Kinn", "De La Nonna", 'Berbere']; 
    const random = Math.floor(Math.random() * laRestaurants.length);
    console.log(random, laRestaurants[random]);
    randomResult =  laRestaurants[random]
    alert(`${randomResult}`)
}

// Random Park Selector
let randomPark = document.getElementsById('random-park')
function randomParkSelector() {
    var parks = ['Central Park: NYC', "Golden Gate Park: San Francisco", "Echo Park Lake: Los Angeles", "Dolores Park: San Francisco", 'Pan Pacific Park: Los Angeles', "Crocheron Park: NYC"]; 
    const random = Math.floor(Math.random() * parks.length);
    console.log(random, parks[random]);
    randomResult =  parks[random]
    alert(`${randomResult}`)
}