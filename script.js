//Fade in Fade out Order 

const order = document.querySelector('#smoothie');
const orderCarousel = document.querySelector('.composeOrder');

order.addEventListener('click' , ()=> {
    if(orderCarousel.style.display === 'none'){
        orderCarousel.style.display = 'block';
    } else {
        orderCarousel.style.display = 'none';
    } 
});

//Fade in Fade out checkout 

const globeIcon = document.querySelector('#globe');
const address = document.querySelector('.hiddenAddress');
 
globeIcon.addEventListener('click' , ()=> {
    if(address.style.display === 'none'){
        address.style.display = 'block';
    } else {
        address.style.display = 'none';
    }
});
