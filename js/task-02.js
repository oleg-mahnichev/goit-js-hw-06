const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingredientsList = document.querySelector('#ingredients');

// ingredients.forEach((ingredient) => {
//   const listItem = document.createElement('li');
//   listItem.textContent = ingredient;
//   listItem.classList.add('item');
//   ingredientsList.appendChild(listItem);
// });

// console.log('Результат:');
// console.log(ingredientsList.innerHTML);

const ul = document.querySelector('#ingredients');

const items = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingredient;
  return li;
});
console.log(items);
ul.append(...items);