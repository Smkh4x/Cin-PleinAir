async function getseries (){

    const res = await fetch('https://api.tvmaze.com/shows');
const data = await res.json();

const serie = data[161]

console.log(data)
}

getseries()


