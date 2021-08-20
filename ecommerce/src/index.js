const cursor = document.getElementById('cursor');
const cart = document.getElementById('overlay');
const exit = document.getElementById('exit');
const bag = document.getElementById('cart');
const background = document.getElementById('opacity');
const gallery =  document.getElementById('gallery');
const shop = document.getElementById('shop-now');

if(document.getElementById('gallery'))
{
    

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
    if(mouseX >= 900)
    {
        cursor.innerHTML = '<i class="fas fa-chevron-right"></i>';
    }
    if(mouseX < 900)
    {
        cursor.innerHTML = '<i class="fas fa-chevron-left"></i>';
    }
}

bag.addEventListener('click', openBag)
exit.addEventListener('click', closeBag)

function openBag()
{
    cart.style.width = "650px";
    cart.style.display = "inline-block";
    background.style.opacity = ".5";
    background.style.transition = ".15s ease";
}
function closeBag()
{
    cart.style.width = "0px";
    background.style.opacity = "1";
    cart.style.display = "none";
    cart.style.transition = ".15s ease";
}

const keyboardImages = []
const switchImages = ['../src/']
