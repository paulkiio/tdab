(function () {
    let url = "http://quotes.rest/qod.json";

    fetch(url)
        .then(data => { return data.json() })
        .then(res => {
            let quoteElm = document.getElementById("quote");
            quoteElm.textContent = res.contents.quotes[0].quote;
        })
})();