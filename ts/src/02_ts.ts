// class Animal {
//     private name: string = '111';
//     constructor(theName: string) { 
//         console.log(this.name)
//         this.name = theName; 
//         console.log(this.name)
//     }
// }

// class Rhino extends Animal {
//     constructor() { super("Rhino"); }
// }

// class Employee {
//     private name: string;
//     static age:number = 19
//     constructor(theName: string) { this.name = theName; }
// }

// let animal = new Animal("Goat");
// console.log(Animal)
// // let rhino = new Rhino();
// console.log(Animal)
// let employee = new Employee("Bob");



// function buildName(firstName: string, lastName?: string) {
//     if (lastName)
//         return firstName + " " + lastName;
//     else
//         return firstName;
// }

// let result1 = buildName("Bob");  // works correctly now
// // let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result3 = buildName("Bob", "Adams");  // ah, just right


// // let deck = {
// //     suits: ["hearts", "spades", "clubs", "diamonds"],
// //     cards: Array(52),
// //     createCardPicker: function ()  {
// //         console.log(this)
// //         // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
// //         // return () => {
// //         //     let pickedCard = Math.floor(Math.random() * 52);
// //         //     let pickedSuit = Math.floor(pickedCard / 13);

// //         //     return {suit: this.suits[pickedSuit], card: pickedCard % 13};
// //         // }
// //     }
// // }

// // let cardPicker = deck.createCardPicker();
// // let pickedCard = cardPicker();

// // alert("card: " + pickedCard.card + " of " + pickedCard.suit);



// interface Card {
//     suit: string;
//     card: number;
// }
// interface Deck {
//     suits: string[];
//     cards: number[];
//     createCardPicker(this: Deck): () => Card;
// }
// let deck: Deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     // NOTE: The function now explicitly specifies that its callee must be of type Deck
//     createCardPicker: function(this: Deck) {
//         return () => {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);

//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//         }
//     }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// alert("card: " + pickedCard.card + " of " + pickedCard.suit);



// let suits = ["hearts", "spades", "clubs", "diamonds"];

// function pickCard(x): any {
//     // Check to see if we're working with an object/array
//     // if so, they gave us the deck and we'll pick the card
//     if (typeof x == "object") {
//         let pickedCard = Math.floor(Math.random() * x.length);
//         return pickedCard;
//     }
//     // Otherwise just let them pick the card
//     else if (typeof x == "number") {
//         let pickedSuit = Math.floor(x / 13);
//         return { suit: suits[pickedSuit], card: x % 13 };
//     }
// }

// let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
// let pickedCard1 = myDeck[pickCard(myDeck)];
// alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

// let pickedCard2 = pickCard(15);
// alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);


// function indentity<T> (arg:T):T {
//     return arg;
// }

// function loggingIdentity<T>(arg: T[]): T[] {
//     console.log(arg.length);  // Error: T doesn't have .length
//     return arg;
// }


// interface GenericIdentityFn<T> {
//     (arg: T): T;
// }

// function identity<T>(arg: T): T {
//     return arg;
// }

// let myIdentity: GenericIdentityFn<number> = identity;


// enum Response1 {
//     No = 0,
//     Yes = 1,
// }

// function respond(recipient: string, message: Response1): void {
//     alert(message)
// }

// respond("Princess Caroline", Response1.Yes)



// interface Named {
//     name: string;
// }

// class Person {
//     name: string;
// }

// let p: Named;
// // OK, because of structural typing
// p = new Person();



// interface Named {
//     name: string;
// }

// let x: Named;

// // y's inferred type is { name: string; location: string; }
// let y = { name: 'Alice', location: 'Seattle' };
// x = y;

// console.log(x.name)


// let items = [1, 2, 3];

// // Don't force these extra arguments
// items.forEach((item, index, array) => console.log(item));

// // Should be OK!
// items.forEach((item) => console.log(item));


// function printLabel(labelledObj: { label: string }) {
//     console.log(labelledObj.label);
//   }
  
//   let myObj12 = { size: 10, label: "Size 10 Object" };
//   printLabel(myObj12);

//   interface LabelledValue {
//     label: string;
//   }
  
//   function printLabel(labelledObj: LabelledValue) {
//     console.log(labelledObj.label);
//   }
  
//   let myObj121 = {size: 10, label: "Size 10 Object"};
//   printLabel(myObj121);


//   interface SquareConfig {
//     color?: string;
//     width?: number;
//   }
  
//   function createSquare(config: SquareConfig): {color: string; area: number} {
//     let newSquare = {color: "white", area: 100};
//     if (config.color) {
//       newSquare.color = config.color;
//     }
//     if (config.width) {
//       newSquare.area = config.width * config.width;
//     }
//     return newSquare;
//   }
  
//   let mySquare_1 = createSquare({color: "black",area:10} as SquareConfig);

  


//   function reverse(x: number): number;
// function reverse(x: string): string;
// function reverse(x: number | string): number | string {
//     if (typeof x === 'number') {
//         return Number(x.toString().split('').reverse().join(''));
//     } else if (typeof x === 'string') {
//         return x.split('').reverse().join('');
//     }
// }

// class Error1 {

// }

// class ApiError extends Error1 {
//     code: number = 0;
// }
// class HttpError extends Error1 {
//     statusCode: number = 200;
// }

// function isApiError(error: Error1) {
//     if (typeof (error as ApiError).code === 'number') {
//         return true;
//     }
//     return false;
// }

// class rror extends Error1 {
//     code:number = 20
// }


// isApiError(rror)

// let tom: [string, number];
// tom = ['Tom', 25];

// tom[0].slice(1);
// tom[1].toFixed(2);

// enum Direction {
//     Sun,
//     Mon, 
//     Tue, 
//     Wed, 
//     Thu, 
//     Fri, 
//     Sat
// };

// console.log(Direction[0])
// console.log(Direction['Sun'])

// const enum Directions {
//     Up,
//     Down,
//     Left,
//     Right
// }

// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

// console.log(directions)
// console.log(Directions['Up'])

// enum Direction {
//     Up = "UP",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT",
// }

// console.log(Direction['Up'])
// console.log(Direction['UP'])


// interface ClockInterface1 {
//     currentTime: Date;
// }

// class Clock_btn implements ClockInterface1 {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }
