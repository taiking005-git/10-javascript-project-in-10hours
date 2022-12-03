const randomRecipe = document.getElementById("random-recipe");
const personalizeBtn = document.getElementById("personalize-btn");
const favMealList = document.querySelector("#fav-meal-lists");

mapFavMealList();
getRandomMeal()


async function getRandomMeal() {
  const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const respData = await resp.json();
  const randomMeal = respData.meals[0];

  addRandomMeal(randomMeal, true);

}

async function getMealbyID(mealID) {
  const resp = await fetch("https://themealdb.com/api/json/v1/1/lookup.php?i=" + mealID);
  const respData = await resp.json();
  const mealData = respData.meals[0];

  return mealData;
}


personalizeBtn.addEventListener("click", () => {
  getRandomMeal()
})




function addRandomMeal(mealData, random = false) {
  favoriteMealArray = getSavedMealsLS();
  randomRecipe.innerHTML = `
     <div class="top">
            <img
              src=${random ? mealData.strMealThumb : "https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg"}
              alt=${mealData.strMeal}
            />
            <div class="day">Random Meal</div>
          </div>
          <div class="bottom">
            <h4>${random ? mealData.strMeal : ""}</h4>
            <ul class="rating-list" >
              <li class=${favoriteMealArray.includes(+mealData.id) ? "active" : ""} id="add-favorite-btn">
                <span class="material-symbols-outlined" id="add-favorite-btn" > favorite </span>
              </li >
            </ul>
          </div>
    `
  const addFavoriteBtn = document.querySelector("#add-favorite-btn");

  addFavoriteBtn.addEventListener("click", () => {
    handleFavorites(mealData.idMeal)
  })
}

// function updateIcon(mealID) {
//   return 
// }

function handleFavorites(mealsID) {
  addMealLS(+mealsID)
  // getRandomMeal()
  mapFavMealList();
}


function addMealLS(mealID) {
  // get saved data from localStorage
  const savedMeals = getSavedMealsLS();
  // Add new data to saved data in the localStorage 
  localStorage.setItem('mealIDs', JSON.stringify([...savedMeals, mealID]));
}

function getSavedMealsLS() {
  //get saved data from local
  const mealIDs = JSON.parse(localStorage.getItem('mealIDs'));
  return mealIDs === null ? [] : mealIDs;
}

function removeMealLS(mealID) {
  const savedMeals = getSavedMealsLS();
  localStorage.setItem('mealIDs', JSON.stringify(savedMeals.filter(id => id !== +mealID)));
}

async function mapFavMealList() {

  favoriteMealArray = getSavedMealsLS();

  favMealDetails = [];

  for (let i = 0; i < favoriteMealArray.length; i++) {
    const mealIDs = favoriteMealArray[i];
    meal = await getMealbyID(mealIDs);
    favMealDetails.push(meal);
  }

  favMealList.innerHTML = favMealDetails.map(item =>
    `
  <li class="list ">
    <img
      src=${item.strMealThumb}
      alt=""
    />
    <span>${item.strMeal}</span>
    <button  class="remove-btn"><span id=${item.idMeal} class="material-symbols-outlined"> close </span></button>
  </li>
  `
  ).join("");


  const removeFavoriteBtn = document.querySelectorAll(".remove-btn");

  removeFavoriteBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
      removeMealLS(e.target.id)
      mapFavMealList();
    })
  })
}

