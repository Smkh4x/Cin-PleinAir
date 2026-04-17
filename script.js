async function loadThreeSeries() {
    try {
        const response = await fetch('https://api.tvmaze.com/shows');
        const data = await response.json();

        const serie1 = data[161];
        const serie2 = data[169];
        const serie3 = data[23];

        document.getElementById('serie-api-1').innerHTML = `
            <img src="${serie1.image.medium}" alt="${serie1.name}">
            <h2>${serie1.name}</h2>
            <h3>${serie1.premiered.split('-')[0]} - Present</h3>
            <h1>+ ${serie1.weight}K</h1>
            <p>⭐ ${serie1.rating.average}</p>
        `;

        document.getElementById('serie-api-2').innerHTML = `
            <img src="${serie2.image.medium}" alt="${serie2.name}">
            <h2>${serie2.name}</h2>
            <h3>${serie2.premiered.split('-')[0]} - Present</h3>
            <h1>+ ${serie2.weight}K</h1>
            <p>⭐ ${serie2.rating.average}</p>
        `;

        document.getElementById('serie-api-3').innerHTML = `
            <img src="${serie3.image.medium}" alt="${serie3.name}">
            <h2>${serie3.name}</h2>
            <h3>${serie3.premiered.split('-')[0]} - Present</h3>
            <h1>+ ${serie3.weight}K</h1>
            <p>⭐ ${serie3.rating.average}</p>
        `;

    } catch (error) {
        console.error("error:", error);
    }
}

loadThreeSeries();

async function loadThreefilms() {
    try {
        const response = await fetch('https://api.tvmaze.com/shows');
        const data = await response.json();

        const serie4 = data[0];
        const serie5 = data[1];
        const serie6 = data[4];

        document.getElementById('film-api-4').innerHTML = `
            <img src="${serie4.image.medium}" alt="${serie4.name}">
            <h2>${serie4.name}</h2>
            <h3>${serie4.premiered.split('-')[0]} - Present</h3>
            <h1>+ ${serie4.weight}K</h1>
            <p>⭐ ${serie4.rating.average}</p>
        `;

        document.getElementById('film-api-5').innerHTML = `
            <img src="${serie5.image.medium}" alt="${serie5.name}">
            <h2>${serie5.name}</h2>
            <h3>${serie5.premiered.split('-')[0]} - Present</h3>
            <h1>+ ${serie5.weight}K</h1>
            <p>⭐ ${serie5.rating.average}</p>
        `;

        document.getElementById('film-api-6').innerHTML = `
            <img src="${serie6.image.medium}" alt="${serie6.name}">
            <h2>${serie6.name}</h2>
            <h3>${serie6.premiered.split('-')[0]} - Present</h3>
            <h1>+ ${serie6.weight}K</h1>
            <p>⭐ ${serie6.rating.average}</p>
        `;

    } catch (error) {
        console.error("error:", error);
    }
}

loadThreefilms();