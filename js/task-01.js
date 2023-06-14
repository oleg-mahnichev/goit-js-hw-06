const categories = document.querySelector('#ul.categories'); // find Ul in document with id=categories
const items = document.querySelectorAll('li.item');// find all elements with class item
const categoryCount = items.length; // find count of categories
console.log('Number of categories:', categoryCount);// display Number of categories

items.forEach((item) => {
    const Header = item.querySelector('h2').textContent;// take text from h2
    const elementsCount = item.querySelectorAll('li').length; //take count of element
    console.log('Category:', Header); // display header
    console.log('Elements:', elementsCount); // display count of element this category
});
