'use strict';
// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive')

// // const interface = 'Audio';
// // const private = 534;

// function logger(){
//     console.log('My name is Daumantas');
// }
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//    // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// const appleJuce = fruitProcessor(5, 0)
// console.log(appleJuce)

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num=Number('22');
// console.log(num) 

// function calcAge1(birthYear){
//     //const age = 2037 - birthYear;
//     return 2021 - birthYear;
// }

// const age1 = calcAge1(1987);
// //console.log(age1);

// const calcAge2 = function(birthYear){
//     return 2021 - birthYear
//}
// const age2= calcAge2(1988)
//  console.log(age1, age2)

// const calcAge3=birthYear=> 2021 - birthYear;
// const age3= calcAge3(1987)
// console.log(age3)

// const yearsUnitRetirement = birthYear => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log(yearsUnitRetirement(1987))
// function cutFruitPieces(fruit){
//     return fruit *3;
// }


// function fruitProcessor(apples, oranges) {
//     const applePieces=cutFruitPieces(apples);
//     const orangePieces=cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//         return juice;
//     }
// console.log(fruitProcessor(2, 3))


// for (let rep=1; rep<= 10; rep++){
//     console.log(`Lifting weights repetition ${rep}`)

// let rep = 1;
// while( rep<=10){
//     // console.log(`While: Lifting weights repetition ${rep}`)
//  rep++;   
// }

// let dice =Math.trunc( Math.random() * 6)+1
// while(dice !== 6){
//     console.log(`You rolled a ${dice}`);
//     if (dice === 6) console.log('Loop is about to end...');
// }

// const calcTip = function (bill){
//     return bill >= 50&&bill <= 300 ? bill*0.15: bill*0.2;
// }
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for ( let i=0; i < bills.length; i++){
//     const tip = calcTip(bills[i]);
//     tips.push(tip)
//     totals.push(tip+bills[i]);
// }
// console.log(bills, tips, totals)

// const calcAverage =function(arr){
//     let sum = 0;
//     for (let i=0; i<arr.length; i++){
//         sum = sum + arr[i];
//     }
//     console.log(sum)
//     return sum / arr.length;
// }
// console.log( calcAverage([2,3,7]))
// console.log(calcAverage(totals))
// console.log(calcAverage(tips))

//  const calcAge = birthYear => 2021 - birthYear

// const yearsUnitRetirement = function (birthYear, firstname){
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if(retirement >0){
//         console.log(`${firstname} retires in ${retirement} years`)
//         return retirement
//     }else{
//         console.log(`${firstname} has already retired`)
//         return -1;}


    
//     // return `${firstname} retires in ${retirement} years`;
// }
// console.log(yearsUnitRetirement(1987, 'Daumantas'))
// console.log(yearsUnitRetirement(1940, 'Jonas'))

// const calcAverage = (a, b, c) => (a+b+c)/3; 
// console.log(calcAverage(3, 4, 5));

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgDolphins, avgKoalas){
//     if (avgDolphins>= 2*avgKoalas){
//         console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`)}
//         else if (avgKoalas>= 2*avgDolphins){console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`)
//         } else (console.log('No team wins...'))
// }
// checkWinner(555, 111)

// scoreDolphins= calcAverage(85, 54, 41 )
// scoreKoalas= calcAverage(23, 34, 27)
// console.log(scoreDolphins, scoreKoalas);


// const friends =['Michael', 'steven', 'Peter'];
// // add element
// const newLength = friends.push('Jay')
// console.log(friends)
// console.log(newLength)

// friends.unshift('john');
// console.log(friends)
// // remove elemnts
// friends.pop();
// const popped = friends.pop();
// console.log(popped)
// console.log(friends)

// friends.shift();
// console.log(friends)

// console.log(friends.indexOf('steven'))
// console.log(friends.indexOf('bob'))
// friends.push(23)
// console.log(friends.includes('steven'))
// console.log(friends.includes('bob'))
// console.log(friends.includes(23))

// if (friends.includes('steven')){
//     console.log('you have a friend called Steven');
// } 



// const calcTip = function(bill){
//     return bill>= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// //const calcTip = bill => bill>= 50 && 300 <= ? bill * 0.15 : bill * 0.2;
// const bills =[125, 555, 44];
// const tips =[calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips)

// const DaumantasArray = [
//     'Daumantas',
//     'Stankevicius',
//     2021-1987,
//     'student',
//     ['Marius', 'Martynas', 'Valdas']
// ];

// const Daumantas = {
//     firstName: 'Daumantas',
//     lastName: 'Stankevicius',
//     birthYear: 1987,
//     job: 'student',
//     friends: ['Marius', 'Martynas', 'Valdas'],
//     hasDriverLicense: false,
  
// calcAge: function(){
//     this.age = 2022 - this.birthYear;
//     return this.age;
// },
// getSummary: function() {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${Daumantas.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`
// }

// }
// console.log(`Daumantas is a ${Daumantas.calcAge()}-years old ${Daumantas.job}`);
// console.log(Daumantas.getSummary());

// const mark = {
//     fullName: "Mark Miller",
//     weight: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.markBmi = this.weight/this.height ** 2;
//         return this.markBmi
//     }
// }
// const john = {
//     fullName: 'John Smith',
//     weight: 98,
//     height: 1.55,
//     calcBMI: function(){
//         this.johnBmi = this.weight/this.height ** 2;
//         return this.johnBmi
// }
// }
// mark.calcBMI();
// john.calcBMI();

// // console.log(mark.calcBMI())
// // console.log(john.calcBMI())

// if (mark.markBmi > john.johnBmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.markBmi}) is higher than ${john.fullName}'s BMI (${john.johnBmi})`)
// }
// else if (mark.markBmi < john.johnBmi) {
//     console.log(`${john.fullName}'s BMI (${john.johnBmi}) is higher than ${mark.fullName}'s BMI (${mark.markBmi})`)
// }

// console.log('Lifting weight repetition 1')
// console.log('Lifting weight repetition 2')
// console.log('Lifting weight repetition 3')
// console.log('Lifting weight repetition 4')
// console.log('Lifting weight repetition 5')
// console.log('Lifting weight repetition 6')
// console.log('Lifting weight repetition 7')
// console.log('Lifting weight repetition 8')
// console.log('Lifting weight repetition 9')
// console.log('Lifting weight repetition 10')


// for(let rep = 1; rep<=10; rep++) {
//     console.log(`Lifting weight repetition ${rep}`)
// }



// for (let i=1; i<Daumantas.length; i++){
//     console.log(Daumantas[i], typeof Daumantas[i])
// }

// const years= [1991, 1987, 2015, 2014]
// const age =[];
// for (let i=0; i<years.length; i++){
//     age.push(2021-years[i])
// }
// console.log(age)

// const Daumantas = [
//     'Daumantas',
//     'Stankevicius',
//     1987,
//    'student',
//     ['Marius', 'Martynas', 'Valdas']
// ]
// for (let i = Daumantas.length-1; i >=0; i--){
//     console.log(i, Daumantas[i])
// }

// for (let exercise = 1; exercise <= 3; exercise++){
//     console.log(`---------Starting exercise ${exercise}`)

// for (let rep = 1; rep<6; rep++){
//     console.log(`lifting weight repetition ${rep}`)
// }}``


// for(let rep = 1; rep<=10; rep++) {
//     console.log(`Lifting weight repetition ${rep}`)
// }

// let rep = 1;
// while (rep <= 10){
//     console.log(`while: Lifting weight repetition ${rep}`);
//     rep++; 
// };

let dice =  Math.trunc(Math.random() * 6)+1;
console.log(dice)

while (dice !== 6){
    console.log(`u rolled a ${dice}`)
}