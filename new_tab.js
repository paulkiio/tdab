(function () {
    let url = "https://api.quotable.io/random";

    fetch(url)
        .then(data => { return data.json() })
        .then(response => {
            let quoteElm = document.getElementById("quote");
            quoteElm.textContent = response.content;
        })
})();