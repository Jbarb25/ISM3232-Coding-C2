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
