function getTime() {
  let time = new Date().getTime();
  let date = new Date(time);
  const dateArray = date.toString();
  const day = dateArray.slice(0, 3);
  return day;
}

$(document).ready(function () {
  $("button#wednesday").click(function () {
    if (getTime() === "Wed")
    {
      $(".frog").slideDown();
      $(".text").text(`IT IS WEDNESDAY, MY DUDE!`);
      $(".text").slideDown();
    }
    else
    {
      $(".alt-text").text(`It is not yet Wednesday, my dude.`);
      $(".alt-text").slideDown();
    }
  });
});