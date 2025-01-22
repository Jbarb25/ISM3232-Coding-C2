let products= ["spoon", "fork", "knife", "plate", "bowl"];
products.unshift("pan");
products.pop();
console.log(products)

let scores= [47, 89, 91, 76, 82];
scores[1]= 93;
let scores_avg= (scores[0]+scores[1]+scores[2]+scores[3]+scores[4]) / scores.length;
console.log(scores_avg)


let employee= {
    name: "Mickey Mouse",
    age: 56,
    department: "entertainment",
    isActive: true,}

 employee.department= "sales";
 employee.position= "manager";
 console.log(employee)


 let customers= [{
    name: "Minnie Mouse",
    email: "minnie.m@disney.com",
    purchaseAmount: 450},{
    name: "Daisy Duck",
    email: "daisy.d@disney.com",
    purchaseAmount: 623},{
    name: "Goofy",
    email: "HotDogg@disney.com",
    purchaseAmount: 368}]

customers.push({
    name: "Donald Duck",
    email: "donald.d@disney.com",
    purchaseAmount: 256})
console.log(customers)


let order= {
    orderId: 23456,
    customerName: "Tom Jerry",
    amount: 789,}

calculateTax= (order.amount)*0.10
console.log(order)
console.log(calculateTax)