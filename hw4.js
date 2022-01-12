let obj = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
};
// Cách 1: 
obj.bar[3].xyz = 606;

// Cách 2:
let x = {xyz: 606}
obj.bar.splice(3, 1, x);

console.log(obj.bar[3].xyz);
