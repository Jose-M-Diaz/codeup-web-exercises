'use strict';

(function(){
let url = 'https://api.github.com/users'
//fetch(url, {headers: {'Authorization': GITHUB_KEY}})

//Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.

//can just uses const getCommit = (user) => instead of whole function
function getCommit(user){
    // fetch(url).then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error(error));

    fetch(`https://api.github.com/repos/${user}/codeup-web-exercises/commits`, {headers: {'Authorization': 'GITHUB_KEY'}}).then(response => response.json())
        .then(data => {
            console.log(data[0].commit.committer.date)
            //console.log(data);
        });
};
    getCommit('Jose-M-Diaz')


    //bonus

    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


}())

