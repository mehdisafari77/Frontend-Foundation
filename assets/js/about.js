let locationBtn = document.getElementById('locations')
function showLocations() {
    alert('Catopia Currently Operates In All 50 States In The US')
}

let la = document.getElementsById('secondary-box')
function randomLocationSF() {
    var sfRestaurants = ['Cocotte', "Morton's Steakhouse", 'Chipotle', "The Cheesecake Factory"]; 
    const random = Math.floor(Math.random() * sfRestaurants.length);
    console.log(random, sfRestaurants[random]);
    randomResult =  sfRestaurants[random]
    alert(`Your random restaurant selection result: ${randomResult}`)
}
