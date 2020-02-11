import $ from "jquery";
import "./app2.css";

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");

$tabBar.on("click", "li", e => {
  const $li = $(e.currentTarget);
  $li
    .addClass("selected")
    .siblings()
    .removeClass("selected");
  const index = $li.index();
  console.log(index);
  $tabContent
    .children()
    .eq(index) //等于
    .addClass("active")
    //.css({ display: "block" }) //不推荐css 另外.show()也不推荐
    .siblings()
    .removeClass("active");
  //.css({ display: "none" }); //不推荐css 另外.hide()也不推荐
});
$tabBar
  .children()
  .eq(0)
  .trigger("click");
