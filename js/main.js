const info = {
    link: "http://api.open-notify.org/astros.json"
}

const planetContainer = document.querySelector('.planet__container');

const planets = document.createElement("div");
planets.className = 'planet';

// get info from api
fetch(info.link, {
    method: 'POST',
    body: {

    }
})
    .then(res => {
        if (res.ok){
            console.log('SUCCESS')
        } else {
            console.log("Not Successful")
        }
        res.json()
    })
    .then(data => {
        planets.innerHTML = `
            <h2></h2>
        `;
        console.log(data)
    })
    .catch(error => console.log('ERROR'));