let myFamily = {
    quantity: 4,
    member: ["Dad", "Mom", "Me", "Daughter"],
      location: "Vietnam",
};

let family = Object.create(myFamily);

console.log(myFamily.isPrototypeOf(family));