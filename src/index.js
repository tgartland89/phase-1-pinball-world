document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/games")
    .then(r => r.json())
    .then(data => {
      let gameListNav = document.querySelector(".game-list");
      let gameDetailsSection = document.querySelector(".game-details");
      let gameItems = [];

      // Display game details for the selected game
      function displayGameDetails(game) {
        let detailImage = document.getElementById("detail-image");
        let detailTitle = document.getElementById("detail-title");
        let detailHighScore = document.getElementById("detail-high-score");

        detailImage.src = game.image;
        detailTitle.textContent = game.name;
        detailHighScore.textContent = game.high_score;
      }

      // Display all game list items and add click event listener
      data.forEach(game => {
        let gameName = game.name;
        let gameManufacturer = game.manufacturer_name;
        let gameItem = document.createElement("h5");
        gameItem.textContent = `${gameName} (${gameManufacturer})`;
        gameListNav.appendChild(gameItem);
        gameItems.push(gameItem);

        // Add click event listener to each game list item
        gameItem.addEventListener("click", () => {
          gameItems.forEach(item => {
            item.classList.remove("active");
          });
          gameItem.classList.add("active");
          displayGameDetails(game);
        });
      });

      // Initialize the first game details display
      if (data.length > 0) {
        gameItems[0].classList.add("active");
        displayGameDetails(data[0]);
      }
    })
    .catch(error => {
      console.error("Error fetching games:", error);
    });
});
