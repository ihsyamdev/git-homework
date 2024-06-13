(() => {

  const $counter = document.getElementById("counterNumber");

  document.getElementById("resetButton").addEventListener("click", () => {
    $counter.textContent = 0;
  });

})();
