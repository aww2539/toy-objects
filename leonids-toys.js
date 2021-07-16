// Existing toys
const toys = [
    {   
        id: 1,
        type: "Girl Doll",
        name: "Lucy Doll",
        height: 15,          // Height is in centimeters (cm)
        price: 5,           // Price is in USD $
    },
    {   
        id: 2,
        type: "Boy Doll",
        name: "Clark Doll",
        height: 18, 
        price: 5,
    },
    {
        id: 3,
        type: "Doll House",
        name: "Medium Doll House",
        height: 30,
        price: 15,
    }
]

// New toys
const baseball = {
    id: 4,
    type: "Ball",
    name: "Baseball",
    height: 7.5,
    price: 3,
}

const tennisBall = {
    id: 5,
    type: "Ball",
    name: "Tennis Ball",
    height: 6.5,
    price: 2,
}

toys.push(baseball);
toys.push(tennisBall);

for (const toy of toys) {
    toy.price = toy.price * 1.05
    console.log(`The ${toy.name} is ${toy.height} centimeters tall and costs ${toy.price} dollars`);
    console.log('');
}