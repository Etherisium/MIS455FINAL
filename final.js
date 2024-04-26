function connect() {
    var searchmeal = document.getElementById("searchbox").value;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchmeal}`;

    fetch(url)
        .then(res => res.json())
        .then(data => show(data.meals));
}

