(() => {
  const $counter = document.getElementById("counterNumber");

  const clickHandler = (e) => {
    const $targetButton = e.currentTarget;
    let currentCount = parseInt($counter.textContent);
    if ($targetButton.textContent === "+") {
      $counter.textContent = currentCount + 1;
    } else if ($targetButton.textContent === "-") {
      if (parseInt($counter.textContent) === 0) {
        alert("0未満にはできません");
      } else {
        $counter.textContent = currentCount - 1;
      }
    } else {
      const newValue = currentCount * currentCount;
      // newValueがintの最大値を超えた場合はエラー
      if (newValue > Number.MAX_SAFE_INTEGER) {
        alert("計算結果が大きすぎます");
      } else {
        $counter.textContent = newValue;
      }
    }
  }

  for (let index=0; index < document.getElementsByClassName("calcButton").length; index++) {
    document.getElementsByClassName("calcButton")[index].addEventListener("click", (e) => clickHandler(e));
  }
})();
