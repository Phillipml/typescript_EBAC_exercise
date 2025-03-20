"use strict";
class Investor {
    constructor(name, currentBalance, multiplier) {
        this.name = name;
        this.currentBalance = currentBalance;
        this.multiplier = multiplier;
    }
}
const investors = [];
function addInvestor(name, currentBalance, multiplier) {
    const newInvestor = new Investor(name, currentBalance, multiplier);
    investors.push(newInvestor);
}
function greeting(name) {
    console.log("Olá " + name);
}
function calculateInvestment(currentBalance, multiplier) {
    return currentBalance * multiplier;
}
const newInvestors = [
    { name: "Joao", currentBalance: 1000, multiplier: 2.3 },
    { name: "Maria", currentBalance: 2000, multiplier: 5.4 },
];
newInvestors.forEach((newPerson) => {
    investors.push(newPerson);
});
investors.forEach((n) => {
    greeting(n.name);
    const predictedInvestment = calculateInvestment(n.currentBalance, n.multiplier);
    console.log(`A previsão do seu investimento com o multiplicador contratado é de ${predictedInvestment}`);
});
