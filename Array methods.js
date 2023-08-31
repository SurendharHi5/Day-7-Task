// 1.Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

// a).Get all the countries from Asia continent /region using Filter function


// let XMLHttpRequest =require('xhr2');

// let xhr = new XMLHttpRequest();

// xhr.open('GET','https://restcountries.com/v3.1/all');

// xhr.onload = function(){

//     let data = JSON.parse(xhr.responseText);
//     let asia = data.filter((value)=>{
//         if(value.region === 'Asia'){

//             return value;
//         }
        
//     })
//     console.log(asia) 
// }
// xhr.send()


// b). Get all the countries with a population of less than 2 lakhs using Filter function

// let XMLHttpRequest = require('xhr2');

// let xhr = new XMLHttpRequest();

// xhr.open('GET','https://restcountries.com/v3.1/all');

// xhr.onload = function(){
//     let data = JSON.parse(xhr.responseText);
//     let p = data.filter((value)=>{
//         return value.population<200000;
//     })
//     console.log(p);

// }
// xhr.send()


// c) Print the following details name, capital, flag using forEach function

// let XMLHttpRequest = require('xhr2');
// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://restcountries.com/v3.1/all');
// xhr.onload = function(){
//     let data = JSON.parse(xhr.responseText);
//     data.forEach((value) => {
//         console.log(value.name,value.capital,value.falg);
//     });
// }
// xhr.send()


// d) Print the total population of countries using reduce function

// let XMLHttpRequest = require ('xhr2')
// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://restcountries.com/v3.1/all');
// xhr.onload = function (){
//     let data = JSON.parse(xhr.responseText);
//     let p = data.reduce((a,value)=>{
//         return a+value.population;

//     },10)
//     console.log(p);

// }
// xhr.send()

// output :
//------------

// 7777721573


// e) Print the country which uses US Dollars as currency.

let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function(){
    
     let data = JSON.parse(xhr.responseText);
    let currency = data.filter((value) =>{
      if( value?.currencies?.USD){
        return value;
      }
    })
      console.log(currency);
            }

xhr.send()

