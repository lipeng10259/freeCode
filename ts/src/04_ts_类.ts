
(function (){

    // class Animal {
    //     name: string
    //     constructor(theName: string) { this.name = theName; }
    //     move(distanceInMeters: number = 0) {
    //         console.log(`${this.name} moved ${distanceInMeters}m.`);
    //     }
    // }
    
    // class Snake extends Animal {
    //     constructor(name: string) { super(name); }
    //     move(distanceInMeters = 5) {
    //         console.log("Slithering...");
    //         super.move(distanceInMeters);
    //     }
    // }
    
    // class Horse extends Animal {
    //     constructor(name: string) { super(name); }
    //     move(distanceInMeters = 45) {
    //         console.log("Galloping...");
    //         super.move(distanceInMeters);
    //     }
    // }
    
    // let sam = new Snake("Sammy the Python");
    // let tom: Animal = new Horse("Tommy the Palomino");
    
    // sam.move();
    // tom.move(34);
    

    class Animal {
        constructor(private name: string) {

            // this.name = theName; 

            console.log(this.name);  

        }
    }

    let animal =new Animal("Cat")   
    // animal.name; // 错误: 'name' 是私有的.


    
    let passcode = "secret passcode";

    class Employee {

        private _fullName: string;

        get fullName(): string {

            return this._fullName;

        }

        set fullName(newName: string) {

            if (passcode && passcode == "secret passcode") {

                this._fullName = newName;

            }
            
            else {

                console.log("Error: Unauthorized update of employee!");

            }
        }
    }

    let employee = new Employee();

    employee.fullName = "Bob Smith";

    if (employee.fullName) {

        console.log(employee.fullName);

    }

    class Greeter {
        greeting: string;
        constructor(message: string) {
            this.greeting = message;
        }
        greet() {
            return "Hello, " + this.greeting;
        }
    }
    
    let greeter: Greeter;
    greeter = new Greeter("world");
    console.log(greeter.greet());

    interface Card {
        suit: string;
        card: number;
    }
    interface Deck {
        suits: string[];
        cards: number[];
        createCardPicker(this: Deck): () => Card;
    }
    let deck: Deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        // NOTE: The function now explicitly specifies that its callee must be of type Deck
        createCardPicker: function() {
            
            return () => {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);
    
                return {suit: this.suits[pickedSuit], card: pickedCard % 13};
            }
        }
    }
    
    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();
    
    alert("card: " + pickedCard.card + " of " + pickedCard.suit);
    

})()