class Investor {
  name: string;
  currentBalance: number;
  multiplier: number;
  constructor(name: string, currentBalance: number, multiplier: number) {
    this.name = name;
    this.currentBalance = currentBalance;
    this.multiplier = multiplier;
  }
}

const investors: Investor[] = [];

function addInvestor(
  name: string,
  currentBalance: number,
  multiplier: number
): void {
  const newInvestor = new Investor(name, currentBalance, multiplier);
  investors.push(newInvestor);
}

function greeting(name: string) {
  console.log("Olá " + name);
}

function calculateInvestment(currentBalance: number, multiplier: number) {
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
  const predictedInvestment = calculateInvestment(
    n.currentBalance,
    n.multiplier
  );
  console.log(
    `A previsão do seu investimento com o multiplicador contratado é de ${predictedInvestment}`
  );
});
