// let numbers = [50, 10, 40, 30, 20];
// function compareNumbers(a, b) {
//      let retVal = 0;
//      if (a < b) {
//          retVal = -1;
//      } else if(a > b) {
//          retVal = 1;
//      }
//      return retVal;
// }
// let sorted = numbers.sort(compareNumbers);
// console.log(sorted); // [10, 20, 30, 40, 50]











// let numbers = [50, 10, 40, 30, 20];
// let sort = numbers.sort((a, b) => a - b);
// console.log(sort);

// 10,20,30,40,50














// let add = (a, b) => {
//     return (Number.isInteger(a) &&  Number.isInteger(b)) ? a + b : NaN};
// let sub = (a, b) => {
//     return (Number.isInteger(a) &&  Number.isInteger(b)) ? a - b : NaN};
// let mult = (a, b) => {
//     return (Number.isInteger(a) &&  Number.isInteger(b)) ? a * b : NaN};



// console.log(add(9,10));

// console.log(sub(9,10));
// console.log(mult(9,10));




















// let add = (a, b) => {
//     return (Number.isInteger(a) &&  Number.isInteger(b)) ? a + b : NaN};
// let sub = (a, b) => {
//     return (Number.isInteger(a) &&  Number.isInteger(b)) ? a - b : NaN};
// let mult = (a, b) => {
//     return (Number.isInteger(a) &&  Number.isInteger(b)) ? a * b : NaN};

// let action = (op, a, b) => op(a, b);


// console.log(action(add, 9,10));

// console.log(action(sub,9,10));
// console.log(action(mult,9,10));















// let count = 0
// let interval = setInterval(function() {
//     console.log(++count);
// }, 2000);

// setTimeout(function() {
//     clearInterval(interval);
// }, 20000);















// let fibbRec = function(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     return (fibbRec(n - 1) + fibbRec(n - 2));
// };



// console.log(fibbRec(4)); // -> 3
// console.log(fibbRec(7)); // -> 13












// let fibbRec = (n) =>  n === 0 ? 0 : (n === 1 ? 1 : (fibbRec(n - 1) + fibbRec(n - 2))); 
// console.log(fibbRec(4)); // -> 3
// console.log(fibbRec(7)); // -> 13
















// function fibbRec(n) {
//     let a = 0, b = 1;
//     for (let i = 2; i <= n; i++) {
//         let c = a;
//         a = b;
//         b += c;
//     }
//     return b;
// }

// console.log(fibbRec(4)); // -> 3
// console.log(fibbRec(7)); // -> 13












// for (cont of contacts) {
//         alert(`Name: ${cont.name}\n
//             Phone: ${cont.phone}\n
//             Email: ${cont.email}`);





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



// let showContact = function(list, index) {
//     ((list instanceof Array) ? (console.log(`Name: ${list[index].name}\n
//              Phone: ${list[index].phone}\n
//              Email: ${list[index].email}`)) : NaN);
// };

// let showAllContacts = list => {for (let cont of list) {
//         alert(`Name: ${cont.name}\n
//             Phone: ${cont.phone}\n
//             Email: ${cont.email}`);
//         }
//     };

// let addNewContact = (list, name, phone, email) => {
//     let cont = {
//         name: name,
//         phone: phone,
//         email: email
//     };

//     list.push(cont);
// };























// let sortName = function(list) {
//     list.sort((a,b) => {
//         if (a.name < b.name) return -1;
//         if (a.name > b.name) return 1;
//         return 0;
//     });
// };

// let sortPhone = function(list) {
//     list.sort((a,b) => {
//         if (a.phone < b.phone) return -1;
//         if (a.phone > b.phone) return 1;
//         return 0;
//     });
// };

// let sortEmail = function(list) {
//     list.sort((a,b) => {
//         if (a.email < b.email) return -1;
//         if (a.email > b.email) return 1;
//         return 0;
//     });
// };

// let sort = function(sort, list) {
//     sort(list);
// };




























// let div = (a,b) => {
//     if (b === 0) {
//         throw new RangeError("Can't divide by 0!");
//     }
//     return a / b;
// }

// console.log(div(4, 2)); // -> 2
// console.log(div(4, 0)); // -> Uncaught RangeError: Can’t divide by 0















let numbers = [10, 40, 0, 20, 50];


 
for (let n of numbers) {
    try {
        if (n === 0) {
        throw new RangeError("Can't divide by 0!");
    }
let res = 1000 / n;
    console.log(res);
} catch (e) {
console.log(e);
}
    }
    
    

