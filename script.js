const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGI2MDRhOGRkMmRkOWY5OGIwNDdkYzRmNWRlYTMwNyIsIm5iZiI6MTc3NzU1OTUzMS41NjQ5OTk4LCJzdWIiOiI2OWYzNjdlYjZkNDY1NTZkOGViNzIxN2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7npxWyEU6UXnx4APUvFFLrAUtpMmatya1bbelWCNzKY";
const url = "https://api.themoviedb.org/3/movie/now_playing";

fetch(url, {
    method: "GET",
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json;charset=utf-8"
    }
})
    .then(response => response.json())
    .then(data => {
        console.log("Filmes em cartaz:", data.results);

        const lista = document.getElementById("listaFilmes");

        data.results.forEach(filme => {
            const div = document.createElement("div");
            div.classList.add("filme");

            div.innerHTML = `
                <h3>${filme.title}</h3>
                <p>${filme.overview}</p>`;

            lista.appendChild(div);
            
        });
    })
    
    .catch(error => {
        console.error("Erro ao buscar filme:", error);
    })