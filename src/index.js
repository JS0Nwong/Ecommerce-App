const cursor = document.getElementById('cursor');

if(document.getElementById('gallery'))
{
    const gallery =  document.getElementById('gallery');
    const shop = document.getElementById('shop-now');

    gallery.addEventListener('mouseenter', galleryEnter);
    gallery.addEventListener('mouseleave', galleryLeave);

    shop.addEventListener('mouseenter', shopEnter);
    shop.addEventListener('mouseleave', shopLeave);
    window.addEventListener('mousemove', moveMouse);

}
function shopEnter()
{
    cursor.style.opacity = "0"
    gallery.style.cursor = "pointer";
}
function shopLeave()
{
    cursor.style.opacity = "1"
    gallery.style.cursor = "none";
}

function galleryEnter()
{
    cursor.style.opacity = 1;
}
function galleryLeave()
{
    cursor.style.opacity = 0;
}

function moveMouse(e)
{
    cursor.style.left = e.clientX - cursor.offsetWidth / 2 + "px";
    cursor.style.top = e.clientY - cursor.offsetHeight / 2 + "px";
    var mouseX = e.pageX;
    var mouseY = e.pageY;
    if(mouseX >= 900)
    {
        cursor.innerHTML = '<i class="fas fa-chevron-right"></i>';
    }
    if(mouseX < 900)
    {
        cursor.innerHTML = '<i class="fas fa-chevron-left"></i>';
    }
}