const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const itemArrayEl = [];

images.forEach(image => {
  const itemEl = document.createElement('li');
  itemEl.classList.add("item");
  const imageEl = document.createElement('img');
  imageEl.classList.add("img");
  imageEl.src = image.url;
  imageEl.alt = image.alt;
  imageEl.width = 300;
  itemEl.append(imageEl); 
  itemArrayEl.push(itemEl);
});



const ulEl = document.querySelector('.gallery');

ulEl.append(...itemArrayEl);