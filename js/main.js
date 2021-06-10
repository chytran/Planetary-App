const info = {
    link: "http://api.open-notify.org/astros.json"
}


const planetContainer = document.querySelector('.planet__container');

// get info from api
fetch(info.link)
    .then(res => res.json())
    .then(data => {
        let list = document.createElement("li");
        list.innerHTML = `
            ${data.people.forEach(e => console.log(e))}
        `;

        planetContainer.innerHTML = `
            <h2 class="planet__title">${data.number} are currently in space</h2>
            ${data.people.forEach(e => console.log(e))}
        `;

        console.log(data)
    });