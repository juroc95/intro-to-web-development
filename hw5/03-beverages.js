$(document).ready(function () {
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

  const container = $("<div>").css({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  });

  const addCocktailToDOM = (item) => {
    $(container).append(
      $("<div>")
        .css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "10px",
          width: "220px",
          height: "300px",
        })
        .hover(
          function () {
            $(this).css("background-color", "purple");
            $(this).find("p").css("color", "white");
          },
          function () {
            $(this).css("background-color", "white");
            $(this).find("p").css("color", "black");
          }
        )
        .append(
          $("<img>", { src: item.strDrinkThumb }).css({
            width: "200px",
            height: "200px",
            marginTop: "10px",
          })
        )
        .append(
          $("<p>")
            .css({
              marginTop: "10px",
              fontWeight: "bolder",
            })
            .text(item.strDrink)
        )
    );
  };

  // Add your code here
  const fetchData = (url) => {
    $.ajax({
      type: "GET",
      url: url,
      success: (data) => {
        console.log(data);

        data.drinks.forEach((item) => {
          addCocktailToDOM(item);
        });
        $("#results").append(container);
      },
      error: (error) => {
        console.log(error);
        $("#results")
          .append("<div>")
          .text("An error occurred. Please try again");
      },
      complete: () => {
        $("#loading").remove();
      },
    });
  };

  fetchData(url);
});
