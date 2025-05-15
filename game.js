document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("searchBtn");
    const resultText = document.getElementById("result");
  
    if (searchBtn) {
      let itemFound = false;
  
      searchBtn.addEventListener("click", () => {
        if (!itemFound) {
          // Random chance to find item
          const found = Math.random() < 0.01;
  
          if (found) {
            itemFound = true;
            resultText.textContent = ":)";
            searchBtn.textContent = "Continue";
          } else {
            resultText.textContent = ":(";
            searchBtn.textContent = "Search Again";
          }
        } else {
          // Redirect to the next page if item was found
          const nextPage = searchBtn.dataset.nextPage;
          if (nextPage) {
            window.location.href = nextPage;
          }
        }
      });
    }
  });
  