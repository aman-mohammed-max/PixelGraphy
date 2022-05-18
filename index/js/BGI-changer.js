$(function () {
    var imageNo = Math.round((Math.random() * 4) + 1);
    document.getElementById('bgauto').setAttribute("style","background-image: url( ../index/background-img/BG-image-" + imageNo + ".jpg)")
})