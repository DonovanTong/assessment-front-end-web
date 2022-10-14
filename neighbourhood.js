let restaurants = ['Apollo Burger','McDonalds','BK Lounge']

function randomRests(event) {
    const random = Math.floor(Math.random() *restaurants.length)
    alert(restaurants[random])
}

const tryme = document.querySelector('#tryMe').addEventListener('click', randomRests)