



let block = document.getElementById('one');
let keyboard = [1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46];

function init() {
  let out = '';
  for (let i = 0; i < keyboard.length; i++) {
    if (i == 12 || i == 24) {
      out += '<div class="clearfix"></div>'
    }
    out += '<div class="k-key" data="' + keyboard[i] + '">' + String.fromCharCode(keyboard[i]) + '</div>';
  }
  document.querySelector('#keyboard').innerHTML = out;
}
 init();

document.onkeypress = function (event) {
  console.log(event.code);
  console.log(event.keyCode);
  document.querySelectorAll('#keyboard .k-key').forEach(function (element) {
    element.classList.remove('active');
  });
  document.querySelector('#keyboard .k-key[data="' + event.keyCode + '"]').classList.add('active');
}
document.querySelectorAll('#keyboard .k-key').forEach(function (element) {
  element.onclick = function (event) {
    document.querySelectorAll('#keyboard .k-key').forEach(function (element) {
      element.classList.remove('active');
    });
    let code = this.getAttribute('data');
    this.classList.add('active');
    console.log(code);
  }
});




$(document).ready(function () {
  $(".block_title").click(function (event) {
    // if ($('.block').hasClass('one')) {
    //   $('block_title').not($(this)).removeClass('active');
    //   $('block_text').not($(this).next()).slideUp(300);
    // }
    $(this).toggleClass('active').next().slideToggle(300);
  });
});

console.log($('.block').hasClass('one'));
