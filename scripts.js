/*open and close sidebar*/

const sidebar = document.getElementById('sidebar');
const close = document.getElementById('close');
const bar = document.getElementById('bar');

if (sidebar) {
  sidebar.addEventListener('click',() => {
    bar.classList.add('active');
  })
}

if (close) {
  close.addEventListener('click',() => {
    bar.classList.remove('active');
  })
}

/*open and close cart*/

let openCart = document.querySelector('.shopping');
let closeCart = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openCart.addEventListener('click', ()=>{
	body.classList.add('active');
})

closeCart.addEventListener('click', ()=>{
	body.classList.remove('active');
})

/*making list of products*/

const products = [{
	id: 2,
	image: 'img/chaewon1.jpg',
	name: 'Chaewon',
	priceCents: 1499,
},{
	id: 3,
	image: 'img/enchae1.jpg',
	name: 'Eunchae',
	priceCents: 1499,
},{
	id: 4,
	image: 'img/kazuhareal1.jpg',
	name: 'Kazuha',
	priceCents: 1499,
},{
	id: 5,
	image: 'img/sakura1.jpg',
	name: 'Sakura',
	priceCents: 1499,
},{
	id: 6,
	image: 'img/heesung.jpg',
	name: 'Heesung',
	priceCents: 999,
},{
	id: 7,
	image: 'img/jake.jpg',
	name: 'Jake',
	priceCents: 999,
},{
	id: 8,
	image: 'img/jay.jpg',
	name: 'Jay',
	priceCents: 999,
},{
	id: 9,
	image: 'img/niki.jpg',
	name: 'Niki',
	priceCents: 999,
},{
	id: 10,
	image: 'img/sunghoon.jpg',
	name: 'Sunghoon',
	priceCents: 999,
},{
	id: 11,
	image: 'img/sunoo.jpg',
	name: 'Sunoo',
	priceCents: 999,
}, {
	id: 12,
	image: 'img/jungwon.png',
	name: 'Jungwon',
	priceCents: 999,
}, {
	id: 1,
	image: 'img/yunjin1.jpg',
	name: 'Yunjin',
	priceCents: 1499,
}


];

let listproducts =[];
function initApp(){
	products.forEach((value,key)=>{
		let newDiv = document.createElement('div');
		newDiv.innerHTML = `
		<div class="product">
		<img class="photo" src="${value.image}">
			<div class="description">
				<span>Photocard</span>
				<p class="name">${value.name}</p>
				<p class="price">$${(value.priceCents/100).toFixed(2).toLocaleString()}</p>
				<button class="shopbutton" onclick="addToCart(${key})">Add to Cart</button>
		</div>
		`;
		list.appendChild(newDiv);
	})
}
initApp();

function addToCart(key){
	if(listproducts[key] == null){
		listproducts[key] = products[key];
		listproducts[key].quantity = 1;
	} else {
		listproducts[key].quantity += 1;
	}
	reloadCart();
}

function reloadCart(){
	listCard.innerHTML = '';
	let count = 0;
	let totalPrice = 0;
	for (const [key, value] of Object.entries(listproducts)) {

		totalPrice += value.priceCents * value.quantity;
		count += value.quantity;

		if(value != null){
			let newDiv = document.createElement('li');
			newDiv.innerHTML = `
				<div><img src="${value.image}"></div>
				<div>${value.name}</div>
				<div>${(value.priceCents/100).toFixed(2).toLocaleString()}</div>
				<div>
					<button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
					<div class="count">${value.quantity}</div>
					<button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
					</div>
			`;
			listCard.appendChild(newDiv);
		}
	}

	total.innerText = (totalPrice/100).toFixed(2).toLocaleString();
	quantity.innerText = count;
}

function changeQuantity(key,quantity){
	if(quantity == 0){
		delete listproducts[key];
	} else {
		listproducts[key].quantity = quantity;
		listproducts[key].price = quantity + products[key].price;
	}
	reloadCart();
}