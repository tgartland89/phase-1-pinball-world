document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/games")
      .then(r => r.json())
      .then(data => {
        let gameListNav = document.querySelector(".game-list");
        
        data.forEach(game => {
          let gameName = game.name;
          let gameManufacturer = game.manufacturer_name;
          let gameItem = document.createElement("h5");
          gameItem.textContent = `${gameName} (${gameManufacturer})`;
          gameListNav.appendChild(gameItem);
        });
      })
      .catch(error => {
        console.error("Error fetching games:", error);
      });
  });