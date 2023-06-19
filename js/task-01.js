// const categories = document.querySelector('#categories');
// const items = document.querySelectorAll('.item');
// const categoryCount = items.length;
// console.log('Number of categories:', categoryCount);

// items.forEach((item) => {
//     const header = item.querySelector('h2').textContent;
//     const elementsCount = item.querySelectorAll('li').length;
//     console.log('Category:', header);
//     console.log('Elements:', elementsCount);
// });

const categoriesList = document.querySelector('#categories');
const categories = categoriesList.querySelectorAll('.item');

console.log('Number of categories:', categories.length);

categories.forEach((category) => {
    const categoryName = category.querySelector('h2').textContent;
    const elements = category.querySelectorAll('li');

    console.log('Category:', categoryName);
    console.log('Elements:', elements.length);
});
