// let width = window.prompt("Width of the box = ?");
// let height = window.prompt("Height of the box = ?");
// let len = window.prompt("Length of the box = ?");

// let volume = width * height * len;
// window.alert(`Volume of the box is = ${volume}`);


















// let contacts = [{
// name: "Maxwell Wright",
// phone: "(0191) 719 6495",
// email: "Curabitur.egestas.nunc@nonummyac.co.uk"
// }, {
// name: "Raja Villarreal",
// phone: "0866 398 2895",
// email: "posuere.vulputate@sed.com"
// }, {
// name: "Helen Richards",
// phone: "0800 1111",
// email: "libero@convallis.edu"
// }];

// // write your code here

// let name = prompt("Enter your name:");
// let phone = prompt("Enter your number:");
// let email = prompt("Enter your email:");

// let news = {
//     name: name,
//     phone: phone,
//     email: email
// };

// contacts.push(news);



// //


// let last = contacts.length - 1;

// console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
// console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);





















// let number = prompt("Number: ");

// if (number > 90 && number < 110) {
//     alert("Bingo!");
// } else {
//     alert("Miss");
// }






















// let number = prompt("Number: ");

// (number > 90 && number < 110) ? alert("Bingo!") : alert("Miss!");
















// let numb1 = Number(prompt("Enter the first number: "));
// let numb2 = Number(prompt("Enter the second number: "));
// let res;
// let op = prompt("Enter one of the following symbols (+, -, *, /)");

// if (!Number.isNaN(numb1) && !Number.isNaN(numb2)) {
//     switch (op) {
//         case "+": res = numb1 + numb2; break;
//         case "-": res = numb1 - numb2; break;
//         case "*": res = numb1 * numb2; break;
//         case "/": res = numb1 / numb2; break;
//         default: res = "Unknown operand!";
//     }
// } else {
//     res = "No number!";
// }

// alert(res);



















// let contacts = [{
//     name: "Maxwell Wright",
//     phone: "(0191) 719 6495",
//     email: "Curabitur.egestas.nunc@nonummyac.co.uk"
// }, {
//     name: "Raja Villarreal",
//     phone: "0866 398 2895",
//     email: "posuere.vulputate@sed.com"
// }, {
//     name: "Helen Richards",
//     phone: "0800 1111",
//     email: "libero@convallis.edu"
// }];

// let choice = prompt("Enter 1 to show first contact, 2 for last contact, and 3 for adding a new contact: ");
// console.log(choice);

// if (!Number.isNaN(choice)) {
//     switch (choice) {
//         case "1": alert(`First Contact:\n
//             Name: ${contacts[0].name}\n
//             Phone Number: ${contacts[0].phone}\n
//             Email: ${contacts[0].email}`); break;
        
//         case "2": alert(`Last Contact:\n
//             Name: ${contacts[contacts.length - 1].name}\n
//             Phone Number: ${contacts[contacts.length - 1].phone}\n
//             Email: ${contacts[contacts.length - 1].email}`); break;

//         case "3": alert("Enter new contact details!");
//             let newName = prompt(`Name: `);   
//             let newPhone = prompt(`Phone Number: `);
//             let newEmail = prompt(`Email: `);

//             if (!Number.isNaN(newPhone)) {}
//             let newContact = {
//                 name: newName,
//                 phone: newPhone,
//                 email: newEmail
//             };

//             contacts.push(newContact);
//             alert("New contact added!");
//             alert(`Contact:\n
//             Name: ${contacts[contacts.length - 1].name}\n
//             Phone Number: ${contacts[contacts.length - 1].phone}\n
//             Email: ${contacts[contacts.length - 1].email}`);            
//             break;            

            
// } 
    
//         }   else {
//             alert("No Number!");
//         }    























// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }






















// let numb = 100;

// while (numb >= 10) {
//     console.log(numb);
//     numb -= 10;
    
// }


// 100
// 90
// 80
// 70
// 60
// 50
// 40
// 30
// 20
// 10





















// let up = Number(prompt("Upper: "));
// let low = Number(prompt("Lower: "));

// if (!Number.isNaN(up) && !Number.isNaN(low)) {
//     if (up > low) {
//         for (let i = up; i >= low; i -= 10) {
//             console.log(i);
//         }
//     } else {
//         alert("Upper must be greater than Lower!");
//     }
// } else {
//     alert("Must be a number!");
// }






















// let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

// for (let numb of numbers) {
//     console.log(`Orig: ${numb}`);

// }

// for (let numb of numbers) {
//     if (numb % 2 === 0) {
//         console.log(`Even: ${numb}`);
//     }
// }

// for (let numb of numbers) {
//     if (numb > 10 && numb < 60) {
//         console.log(`Range: ${numb}`);
//     }
// }

// Orig: 21
// Orig: 45
// Orig: 100
// Orig: 12
// Orig: 11
// Orig: 78
// Orig: 61
// Orig: 4
// Orig: 39
// Orig: 22
// Even: 100
// Even: 12
// Even: 78
// Even: 4
// Even: 22
// Range: 21
// Range: 45
// Range: 12
// Range: 11
// Range: 39
// Range: 22



























// WRONGGGGGGGGGGGGGGGGGGGGG
// let mov;
// let rate;
// let isOver = false;

// let set = []

// while (!isOver) {
//     mov = prompt("Enter movie name:"); 

//     if (mov !== null) {
//         rate = Number(prompt("Enter the rating:"));

//         if (rate !== null) {

//             setMovie = {
//                 mov: movie,
//                 rating: rate
//             }

//             set.push(setMovie);
            
//         } else {
//             for (let key in set) {
//                 console.log(`Orig: ${key[mov]} (${key[rating]})`);
//             }

//             for (let key in set) {
//                 if (key[rating] < 7) {
//                     console.log(`Less than 7: ${key[mov]} (${key[rating]}`)
//                 }
//             }

//             for (let key in set) {
//                 if (key[rating] > 7) {
//                     console.log(`More than 7: ${key[mov]} (${key[rating]}`)
//                 }
//             }
//         }

    
//     } else {
//         for (let key in set) {
//             console.log(`Orig: ${key[mov]} (${key[rating]})`);
//         }

//         for (let key in set) {
//             if (key[rating] < 7) {
//                 console.log(`Less than 7: ${key[mov]} (${key[rating]}`)
//             }
//         }

//         for (let key in set) {
//             if (key[rating] > 7) {
//                 console.log(`More than 7: ${key[mov]} (${key[rating]}`)
//             }
//         }
//     }
    
// }
// WRONGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG   































// let movies = [];
// let isOver = false;

// while (!isOver) {
//     let title = prompt("Enter movie title:");

//     if (title === null) {
//         isOver = true;
//     } else {
//         let rating = prompt("Enter movie rating:");

//         if (rating === null) {
//             isOver = true;
//         } else {
//             movies.push({title: title, imdb: Number(rating)});
//         }
//     }

// }

// for (let mov of movies) {
//     if (mov.imdb < 7) {
//         console.log(`Less: ${mov.title} (${mov.imdb})`);
//     }
// }

// for (let mov of movies) {
//     if (mov.imdb >= 7) {
//         console.log(`Greater: ${mov.title} (${mov.imdb})`)
//     }
// }



















// let vessel = {
//     LATITUDE: 40.07288,
//     LONGTITUDE: 40.07288,
//     COURSE: 285.6,
//     SPEED: 14.0,
//     IMO: 9175717 ,
//     NAME: "MARENO"
// };
 
// for( let key in vessel) { 
//     console.log(`${key} -> ${vessel[key]}`); 
// }

// LATITUDE -> 40.07288
// LONGTITUDE -> 40.07288
// COURSE -> 285.6
// SPEED -> 14
// IMO -> 9175717
// NAME -> MARENO



































// while (true) {
//     let numb1 = prompt("Enter the first number: ");
//     let numb2 = prompt("Enter the second number: ");
//     let op = prompt("Enter one of the following symbols (+, -, *, /)");

//     if (numb1?.toLowerCase() === "q" || numb2?.toLowerCase() === "q" || op?.toLowerCase() === "q") {
//         break
//     }

//     numb1 = Number(numb1);
//     numb2 = Number(numb2);
//     let res;

//     if (!Number.isNaN(numb1) && !Number.isNaN(numb2)) {
//     switch (op) {
//         case "+": res = numb1 + numb2; break;
//         case "-": res = numb1 - numb2; break;
//         case "*": res = numb1 * numb2; break;
//         case "/": res = numb1 / numb2; break;
//         default: res = "Unknown operand!";
//         }
//     } else {
//         res = "No number!";
//     }

//     alert(res);
        
// }
































// let contacts = [{
//     name: "Maxwell Wright",
//     phone: "(0191) 719 6495",
//     email: "Curabitur.egestas.nunc@nonummyac.co.uk"
//     }, {
//     name: "Raja Villarreal",
//     phone: "0866 398 2895",
//     email: "posuere.vulputate@sed.com"
//     }, {
//     name: "Helen Richards",
//     phone: "0800 1111",
//     email: "libero@convallis.edu"
// }];

// isOver = false

// while (!isOver) {
//     let choice = Number(prompt("1 first, 2 last, 3 all, 4 add, 5 exit"));
//     if (!Number.isNaN(choice)) {
//         switch (choice) {
//             case 1: alert(`Name: ${contacts[0].name}\n
//             Phone: ${contacts[0].phone}\n
//             Email: ${contacts[0].email}`);
//             break;

//             case 2: alert(`Name: ${contacts[contacts.length - 1].name}\n
//             Phone: ${contacts[contacts.length - 1].phone}\n
//             Email: ${contacts[contacts.length - 1].email}`);
//             break;


//             case 3: for (let cont of contacts) {
//                 alert(`Name: ${cont.name}\n
//                     Phone: ${cont.phone}\n
//                     Email: ${cont.email}`)
//             };
//             break;

//             case 4: let newName = prompt("Enter new name:");
//             let newPhone = prompt("Enter new phone:");
//             let newEmail = prompt("Enter new email:");

//             user = {
//                 name: newName,
//                 phone: newPhone,
//                 email: newEmail
//             };


//             contacts.push(user);

//             alert(`Name: ${contacts[contacts.length - 1].name}\n
//             Phone: ${contacts[contacts.length - 1].phone}\n
//             Email: ${contacts[contacts.length - 1].email}`);
//             break;


//             case 5: alert("Bye")
//             isOver = true;
//             break;
                
//         }
//     } else {
//         alert("Enter a number!")
//     }
// }