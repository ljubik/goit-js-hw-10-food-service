import foodListTemplate from '../template/food-list.hbs';
import menu from '../menu.json';

const markup = foodListTemplate(menu);
// console.log("rozmitka", markup);

const foodListRef = document.querySelector('.js-menu');

foodListRef.insertAdjacentHTML('afterbegin', markup);