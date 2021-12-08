$(".tab").click(function() {
  $(".tab").removeClass('active');
  const menuCurrent = $(this).attr('id');
  $("#" + menuCurrent).addClass('active');
  $(".pack-select p").removeClass('select-active');
  showMenu(menuCurrent);
});

function showMenu(className) {
  $(".packs, .recharges").removeClass('active');
  $("." + className).addClass('active');
  $(".choose-" + className).addClass('select-active')
}
