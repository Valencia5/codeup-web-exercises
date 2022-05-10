"use strict"


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

let languages = users.filter(user => user.languages.length >= 3);
 console.log("The users with three languages are", languages)


let emails= users.map(user => user.email);
console.log(emails);

let experience = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);
console.log(experience);

let averageExperience = experience/users.length
console.log(averageExperience);

let longest= users.reduce((longestEmail, user) => {
    if(user.email.length> longestEmail.email.length){
        return user;
    } else{
        return longestEmail;
    }
}, users[0]);
console.log(longest);

let people = users.reduce((individuals, user) => {
    if (individuals === '') {
        return 'My instructors are' + user.name
    }else {
        return individuals + ' ' + user.name;
    }
}, '');
console.log(people);


