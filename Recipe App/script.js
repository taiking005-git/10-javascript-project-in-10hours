const randomRecipe = document.getElementById("random-recipe");
const personalizeBtn = document.getElementById("personalize-btn");

getRandomMeal()


async function getRandomMeal() {
  const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const respData = await resp.json();
  const randomMeal = respData.meals[0];

  addRandomMeal(randomMeal, true);
}

async function getMealbyTerm(term) {
  const resp = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term);
  const respData = await resp.json();

}

personalizeBtn.addEventListener("click", () => {
  getRandomMeal()
})


function addRandomMeal(mealData, random = false) {
  randomRecipe.innerHTML = `
     <div class="top">
            <img

              src=${random ? mealData.strMealThumb : "https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg"}
              alt=${mealData.strMeal}
            />
            <div class="day">Random Recipe</div>
          </div>
          <div class="bottom">
            <h4>${random ? mealData.strMeal : ""}</h4>
            <ul class="rating-list">
              <li class="active">
                <span class="material-symbols-outlined"> favorite </span>
              </li>
            </ul>
          </div>
    `
}