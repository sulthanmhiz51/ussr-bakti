$(document).ready(function () {
  $(document).on("click", ".card", function () {
    window.location.href = "./work.html";
  });

  $("#back-btn").on("click", function () {
    console.log(1);
    history.back();
  });
});
