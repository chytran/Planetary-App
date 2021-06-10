const info = {
    link: "http://api.open-notify.org/astros.json"
}


const planetContainer = document.querySelector('.planet__container');

// get info from api
fetch(info.link)
    .then(res => res.json())
    .then(data => {
        planetContainer.innerHTML = `
            <h2 class="planet__title">${data.number} are currently in space</h2>
            <ul class="list">
                <li class="items">${data.people[0].name}</li>
                <li class="items">${data.people[1].name}</li>
                <li class="items">${data.people[2].name}</li>
                <li class="items">${data.people[3].name}</li>
                <li class="items">${data.people[4].name}</li>
                <li class="items">${data.people[5].name}</li>
                <li class="items">${data.people[6].name}</li>
            </ul>

        `;

        console.log(data)
    });