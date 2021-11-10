'use strict';
const mealsBtn = document.querySelector('.food-container__meals-caption');
const modalWindow = document.querySelector('.modal-food-chooser');
const closeBtn = document.querySelector('.fa-times-circle');
const addProductBtn = document.querySelector('.meals-container__add-product-btn');
const productChooser = document.querySelector('.meals-container__ingredient-chooser');
const productWeight = document.querySelector('.meals-container__weight-chooser');
const productList = document.querySelector('.modal-window__meals-container');
const addMealBtn = document.querySelector('.modal-window__add-meal-btn');

let proteinsSum = 0;
let carboHydratesSum = 0;
let fatSum = 0;
let kcalSum = 0;
let weightSum = 0;

let productListTxt = '';
let productWeightTxt = 0;

mealsBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
// modalWindow.addEventListener('click', closeModal);
addProductBtn.addEventListener('click', addProduct);
addMealBtn.addEventListener('click', addMeal);

document.addEventListener('keydown', e=> {
    if(e.key === 'Escape'){
        closeModal();
    }
});

modalWindow.addEventListener('click', e=> {
    if(e.target === e.currentTarget){
        closeModal();
    }
});

function openModal(){
    modalWindow.classList.remove('hidden');
}

function closeModal(){
    modalWindow.classList.add('hidden');
    const xBtns = document.querySelectorAll('.fa-times');
   

    for(let i = 0 ; i < xBtns.length ; i ++){
        xBtns[i].click();
    }

}
 function addProduct(){
     let productName;

    for(let i = 0 ; productChooser.options.length > i; i++) {
        if(productChooser.value === productChooser.options[i].value) {
            console.log(productChooser.value + ' productChooser value');
            console.log(productChooser.options[i].value + ' productChooser.option[i].value');
            productName = productChooser.options[i].textContent;
            console.log(productChooser.options[i].textContent);
            break;
        }
    }
    console.log(productWeight.value);
    console.log(createProductItem('p','meals-container__added-product-weight', productWeight.value));


    // <p class="moja-klasa">jakis tam napis</p>
    
    console.log(createProductItem('p', 'meals-container__product-name', productName));
    console.log(createProductItem('i', 'fas fa-times', ''));

    const x = createProductItem('i', 'fas fa-times', '');
    x.addEventListener('click', function deleteItem() {
        console.log(this.previousElementSibling);
        this.previousElementSibling.remove();
        console.log(this.previousElementSibling);
        this.previousElementSibling.remove();
        this.remove();

        //el.remove(); el - element, ktory chcemy usunac
    });

    // rodzicElement.appendChild(el);
    productList.appendChild(createProductItem('p', 'meals-container__product-name', productName));
    productList.appendChild(createProductItem('p','meals-container__added-product-weight', productWeight.value));
    productList.appendChild(x);
 }

//  getMacro

function getMacro(){
    const products = [];
    console.log(products);
    let product = document.querySelectorAll('.meals-container__product-name');
    let productWeight = parseInt(document.querySelector('.meals-container__added-product-weight').textContent);

    for(let i = 0; i < product.length; i++) {
        products.push([product[i].textContent, parseInt( document.querySelector('.meals-container__added-product-weight').textContent)]);
    }
   
    let counter = 0;

    for(let j = 0 ; j < products.length ; j ++) {

        for(let i = 0 ; i < foodTable.length ; i ++) {

            if(foodTable[i].ingredient === products[j][0].toLowerCase()) {
                    console.log(foodTable[i].ingredient);
                    proteinsSum += foodTable[i].proteins * (productWeight * 0.01);
                    carboHydratesSum += (foodTable[i].carbohydrates * (productWeight * 0.01));
                    fatSum += (foodTable[i].fats * (productWeight * 0.01));
                    kcalSum += (foodTable[i].kcal * (productWeight * 0.01));
                    weightSum += productWeight;
                    break;
            }
        }
    }
    console.log(kcalSum + ', ' + proteinsSum + ', ' + carboHydratesSum + ', ' + fatSum);
    kcalSum = kcalSum.toFixed(2);
    proteinsSum = proteinsSum.toFixed(2);
    carboHydratesSum = carboHydratesSum.toFixed(2);
    fatSum = fatSum.toFixed(2);
}

 function createProductItem(tagName, className, content){
    const el = document.createElement(`${tagName}`);
    el.className = className;
    el.textContent = content; 

    return el;
    //  element1.className = 'nazwaKlasy';
    //  console.log('' +  imie + '');
    //  console.log(`${imie}`);
 }

 function createMealContainer() {
    document.querySelector('.food-container').insertAdjacentHTML('beforeend',
            `<div class="prod-menu">

            <h2 class="prod-menu__title"><span class="prod-menu__title--skew"> FOODTRACK</span></h2>


            <div class="prod-info-1-left">   
                <i class="fas fa-utensils icon-small"></i>
                <label for="product-1">produkt </label>        
                <output id="product-1" name="product-1">${productListTxt}</output>
            </div>

            <div class="prod-info-1-right">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/steak.png" alt="steak icon" class="icon-small"/>       
                <label for="protein-1">bialko </label>        
                <output id="protein-1" name="protein-1">${proteinsSum}</output>
            </div>


            
            <div class="prod-info-2-left">   
                <i class="fas fa-weight icon-small"></i>     
                <label for="weight-2">waga [g] </label>        
                <output id="weight-2" name="weight-2">${productWeightTxt}</output>
            </div>

            <div class="prod-info-2-right">
                <img src="https://img.icons8.com/ios-filled/50/000000/carbohydrates.png" class="icon-small"/>        
                <label for="carbohydrates-2">weglowodany </label>        
                <output id="carbohydrates-2" name="carbohydrates-2">${carboHydratesSum}</output>
            </div>

            


            <div class="prod-info-3-left">   
                <img src="https://img.icons8.com/ios-filled/50/000000/caloric-energy--v1.png" alt="kcal icon" class="icon-small"/>
                <label for="product-3">kalorie [kcal] </label>        
                <output id="product-3" name="product-3">${kcalSum}</output>
            </div>

            <div class="prod-info-3-right">
                <img src="https://img.icons8.com/ios-filled/50/000000/olive-oil.png" alt="fats icon" class="icon-small"/>       
                <label for="protein-3">tłuszcze </label>        
                <output id="protein-3" name="protein-3">${fatSum}</output>
            </div>
            <footer class="prod-menu__logo-container">
                <img src="img/Tracker.png" alt="logo" class="logo-container__logo">
            </footer>
        </div>`
    );
    productWeightTxt = 0;
    productListTxt = '';

 }

//  createMealContainer();

 function addMeal() {
    const products = document.querySelectorAll('.meals-container__product-name');
    const weight =  document.querySelectorAll('.meals-container__added-product-weight');
    const mealAr = [];
    
    for(let i = 0 ; products.length > i; i++) {
        mealAr.push([products[i].textContent, parseInt(weight[i].textContent)]);
        productListTxt += products[i].textContent +', ';
        productWeightTxt += parseInt(weight[i].textContent) ;
    }

    productListTxt = productListTxt.substring(0, productListTxt.length -2 );
    console.log(productListTxt);
    getMacro();
    createMealContainer();


    closeModal();
    proteinsSum = 0;
    carboHydratesSum = 0;
    fatSum = 0;
    kcalSum = 0;
 }

 function clearWindow(){
     console.log(productChooser.options[0]);
     productChooser.options[0].removeAttribute('selected');
     console.log(productChooser.options[0]);
     productChooser.options[0].setAttribute('selected','true');

 }
