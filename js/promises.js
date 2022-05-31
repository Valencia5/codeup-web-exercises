"use strict"

// const LastCommit = (user) => {
//     return fetch(`https://api.github.com/users/valencia5/events`, {headers: {'Authorization': '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'}})
//         .then(resp => resp.json())
//         .then(data => {
//             console.log(data);
//             for (let event of data) {
//                 if (event.type === "PushEvent") {
//                     console.log(new Date(event.created_at));
//                     break;
//                 }
//             }
//         });
// }
//
// LastCommit("moses-valencia");
let getLastCommit=
return fetch(`https://api.github.com/users/valencia5/events`, {headers: { //Token goes here }}

//todo: Create a function that accepts a GitHub username, and returns a promise that resolves returning
// just the date of the last commit that user made. Reference the github api documentation to achieve this.



