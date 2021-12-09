'use strict';

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Filter Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const language = users.filter(user => user.languages.includes('php', 'css', 'java',));
console.log(language);

const getLanguages = users.filter((language) => language.languages.length > 2);
console.log(getLanguages); //other method

// Map Use .map to create an array of strings where each element is a user's email address
const emails = users.map(x => x.email);
console.log(emails);

// Reduce Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const totalYears = users.reduce((prevValue, currValue) => prevValue + currValue.yearsOfExperience,0);
console.log(totalYears/users.length);

// Reduce Use .reduce to get the longest email from the list of users.
const longestEmail = users.reduce((pre, curr) => pre.email.length > curr.email.length ? pre : curr);
console.log(longestEmail);

// Reduce Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const userNames = users.reduce((prevVal,currVal,idx) => idx === 0 ? currVal.name : prevVal + ', ' + currVal.name, '')
console.log(userNames);



