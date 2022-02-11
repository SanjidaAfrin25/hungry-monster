document.getElementById('meal-submit').addEventListener('click', function() {
    const mealInput = document.getElementById('meal-input').value;
    if (mealInput) {

        document.getElementById('mealInfo').innerText = ``;

        document.getElementById('detailInfo').innerHtml = ``;



        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${mealInput}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data, mealInput)
                showMealInfo(data);



            })



    } else {

        const mealInfoSection = document.getElementById('mealInfo');
        mealInfoSection.innerHTML = `<h2 class="text">Haven't Entered Anything</h2>`;

    }



})


const showMealInfo = (foods, mealInput) => {


    const section = document.getElementById('mealInfo');

    for (let i = 0; i < foods.meals.length; i++) {
        const meal = foods.meals[i];
        console.log(meal);


        const mealDiv = document.createElement('div');
        const Info = `
    <div  class="card card-style">

    <img src="${meal.strMealThumb}" alt="">
    <h2>${meal.strMeal}</h2>
    <button class="btn btn-primary" onClick="displayDetails('${meal.idMeal}')">Get recipes-></button>
    </div>
    `
        mealDiv.innerHTML = Info;
        section.appendChild(mealDiv);


    }

    document.getElementById('detailInfo').innerHTML = ``




}

const displayDetails = mealID => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            showDetails(data)


            console.log(data)
        })
}



const showDetails = detail => {
    console.log(detail.meals[0].strInstructions)
    const divDetail = document.getElementById('detailInfo');
    const newTag = document.createElement('div');
    newTag.className = "detail"
    const divInfo = `
       <div class="card col-md-4 style1 ">
       <img  src="${detail.meals[0].strMealThumb}" alt="">
       <h2>${detail.meals[0].strMeal}</h2>
       <h3>${detail.meals[0].strInstructions}</h3>

       
       </div>

    `
    newTag.innerHTML = divInfo;
    divDetail.appendChild(newTag);

}