function connect() {
    var searchmeal = document.getElementById("searchbox").value;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchmeal}`;

    fetch(url)
        .then(res => res.json())
        .then(data => show(data.meals));
}

function show(data) {
    var oldContent = document.getElementById("container2");
    oldContent.textContent = ""; 

for (var i = 0; i < Math.min(data.length, 5); i++) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = `<h3><b>Meal Name: ${data[i].strMeal}</b></h3>
        <img src="${data[i].strMealThumb}" alt="${data[i].strMeal}"> <br>
        <p2><b>Meal ID: ${data[i].idMeal}</b></p2>
        <h3>Category: ${data[i].strCategory}</h3> <br> <p3>Instructions: ${data[i].strInstructions}</p3> `;

        newDiv.classList.add("innerStyle");
        oldContent.appendChild(newDiv);
    }
}