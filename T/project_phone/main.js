function changeImage(imageSrc, bgColor) {
    // تغيير مصدر الصورة الرئيسية
    var mainImage = document.getElementById('mainImage');
    mainImage.src = imageSrc;
    
    // تغيير لون الخلفية للحاوية بناءً على اللون المحدد
    var container = document.querySelector('.container');
    container.style.backgroundColor = bgColor;
    
    // تغيير لون الخلفية للهيدر بناءً على اللون المحدد
    var header = document.querySelector('header');
    header.style.backgroundColor = bgColor;
}
