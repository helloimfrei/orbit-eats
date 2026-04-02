const grid = document.getElementById("restaurantGrid");
const viewBtns = document.querySelectorAll<HTMLButtonElement>(".view-btn");

viewBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    viewBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    if (btn.dataset.view === "list") {
      grid?.classList.add("list-view");
    } else {
      grid?.classList.remove("list-view");
    }
  });
});
