import getAllPosts, {getPostById} from './postcontroller.js';
console.log(getPostById(1));


const posts = getAllPosts();
console.log(posts);
//const {generateRandomNumber, celciusToFahrenheit } = require('./utils')

//console.log(celciusToFahrenheit(25));

//console.log(generateRandomNumber(1, 100));
