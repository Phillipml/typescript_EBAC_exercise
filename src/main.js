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
const newInvestors = [
    { name: "Joao", currentBalance: 1000, multiplier: 2.3 },
    { name: "Maria", currentBalance: 2000, multiplier: 5.4 },
];
function greeting(name) {
    return "Olá " + name;
}
function calculateInvestment(currentBalance, multiplier) {
    return currentBalance * multiplier;
}
newInvestors.forEach((newPerson) => {
    investors.push(newPerson);
});
investors.forEach((n) => {
    const predictedInvestment = calculateInvestment(n.currentBalance, n.multiplier);
    const newInvestorGreeting = greeting(n.name);
    console.log(`${newInvestorGreeting}! A previsão do seu investimento com o multiplicador contratado é de ${predictedInvestment}`);
});
