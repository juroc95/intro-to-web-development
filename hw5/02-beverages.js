const url =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

let app = document.querySelector("#results");

const container = document.createElement("div");
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.justifyContent = 'center';

const addCocktailToDOM = (item) => {
  console.log(item);
  let element = document.createElement('div');
  let image = document.createElement("img");
  let name = document.createElement("p");

  element.style.display = 'flex';
  element.style.flexDirection = 'column';
  element.style.alignItems = 'center';
  element.style.margin = '10px';
  element.style.width = '220px';
  element.style.height = '300px';

  image.src = item.strDrinkThumb;
  image.alt = "cocktail thumnail";
  image.style.marginTop = "10px";
  image.width = "200";
  image.height = "200";
  name.innerHTML = item.strDrink;
  name.style.fontWeight = 'bolder';
  name.style.marginTop = '10px';

  element.addEventListener("mouseover", function() {
    element.style.backgroundColor = "purple";
    name.style.color = "white";
  })
  element.addEventListener("mouseout", function() {
    element.style.backgroundColor = "white";
    name.style.color = "black";
  })

  element.append(image);
  element.append(name);
  container.append(element);
};


const fetchData = (url) => {
  // Add your code here
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.drinks.forEach((item) => {
        addCocktailToDOM(item);
      });
      app.append(container);
    })
    .catch((error) => {
      console.log(error);
      let div = document.createElement("div");
      div.textContent = "An error occured. Please try again.";
      app.append(div);
    })
    .finally(() => {
      app.removeChild(loading);
    });
};

fetchData(url);
