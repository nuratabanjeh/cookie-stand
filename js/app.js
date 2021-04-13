'use strict'
function randomValue(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var hourarr = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
var citiesArray = [];
function Cities(cityName, minCus, maxCus, AvgCookie, customerPerHour, cookiesPerHour) {
    this.cityName = cityName;
    this.minCus = minCus;
    this.maxCus = maxCus;
    this.AvgCookie = AvgCookie;
    this.customerPerHour = [];
    this.cookiesPerHour = [];
    citiesArray.push(this);

}

let seattle = new Cities('seattle', 23, 65, 6.3);
let Tokyo = new Cities('Tokyo', 3, 24, 1.2);
let dubai = new Cities('dubai', 11, 38, 3.7);
let paris = new Cities('paris', 20, 38, 2.3);
let lima = new Cities('lima', 2, 16, 4.6);

Cities.prototype.getcusPerHour = function () {
    for (let x = 0; x < hourarr.length; x++) {
        this.customerPerHour.push(randomValue(this.minCus, this.maxCus))
    }
    console.log(this.customerPerHour);
}
Cities.prototype.getavgCookiesperhour = function () {
    for (let i = 0; i < this.customerPerHour.length; i++) {
        this.cookiesPerHour.push(Math.ceil(this.AvgCookie * this.customerPerHour[i]))
    }
    console.log(this.cookiesPerHour);
}
var container = document.getElementById('container')
var table = document.createElement('table');
table.setAttribute('id', 'myTable')
container.appendChild(table);
function tableHeader() {



    let tableHeader = document.createElement('tr')
    table.appendChild(tableHeader);
    let emptyTd = document.createElement('th');
    tableHeader.appendChild(emptyTd);
    emptyTd.textContent = '';

    for (let n = 0; n < hourarr.length; n++) {
        let td = document.createElement('th');
        console.log('hi malek');
        td.textContent = hourarr[n];
        tableHeader.appendChild(td);

    }
    let lastCol = document.createElement('th')
    tableHeader.appendChild(lastCol)
    lastCol.textContent = 'Daily Location Total'
}
Cities.prototype.sendData = function () {

    let firstTr = document.createElement('tr');
    table.appendChild(firstTr);
    let firstCityName = document.createElement('td');
    firstTr.appendChild(firstCityName);

    firstCityName.textContent = this.cityName;
    console.log("🚀 ~ file: app.js ~ line 59 ~ this.cityName", this.cityName);


    var s = 0;
    for (let r = 0; r < this.cookiesPerHour.length; r++) {
        let firstTd = document.createElement('td');
        firstTr.appendChild(firstTd);
        firstTd.textContent = this.cookiesPerHour[r];
        s = this.cookiesPerHour[r] + s;

    }




    let totalRaw = document.createElement('td')
    firstTr.appendChild(totalRaw);
    totalRaw.textContent = s;

    // let totalli = document.createElement('li')
    // seattleUnorderedlist.appendChild(totalli);
    // totalli.textContent = 'total :' + s + ' Cookies'

}

function footerTable() {
    let tableFooter = document.createElement('tr')
    table.appendChild(tableFooter);
    let TotalTd = document.createElement('td');
    tableFooter.appendChild(TotalTd);
    TotalTd.textContent = 'Total';
    let total = 0;
    for (let n = 0; n < hourarr.length; n++) {
        let td = document.createElement('td');
        let w = 0;

        for (let k = 0; k < citiesArray.length; k++) {
            w = citiesArray[k].cookiesPerHour[n] + w


        }


        td.textContent = w;
        total = total + w;
        tableFooter.appendChild(td);

    }
    let lastCol = document.createElement('td')
    tableFooter.appendChild(lastCol)
    lastCol.textContent = total;

}

tableHeader();

for (let i = 0; i < citiesArray.length; i++) {
    console.log("🚀 ~ file: app.js ~ line 61 ~ citiesArray", citiesArray[i]);
    citiesArray[i].getcusPerHour();
    citiesArray[i].getavgCookiesperhour();
    citiesArray[i].sendData();

    // seattle.getcusPerHour();
    // seattle.getavgCookiesperhour();
    // seattle.sendData();

}
footerTable();
// citiesArray[0].sendData();
// citiesArray[1].sendData();



// const seattle = {
//     cityName:'seattle',
//     minCus: 23,
//     maxCus: 65,
//     AvgCookie: 6.3,
//     customer: 0,
//     customerPerHour: [],
//     cookiesPerHour: [],


//     getcusPerHour: function () {
//         for (let x = 0; x < hourarr.length; x++) {
//             this.customerPerHour.push(randomValue(this.minCus, this.maxCus))
//         }
//         console.log(this.customerPerHour);
//     },
//     getavgCookiesperhour: function () {
//         for (let i = 0; i < this.customerPerHour.length; i++) {
//             this.cookiesPerHour.push(Math.ceil(this.AvgCookie * this.customerPerHour[i]))
//         }
//         console.log(this.cookiesPerHour);
//     },


// sendData: function(){
//     let container = document.getElementById('container')
//     let title=document.createElement('h2');
//     container.appendChild(title);
//     title.textContent=this.cityName;
//     console.log("🚀 ~ file: app.js ~ line 29 ~ container", container)
//     let seattleUnorderedlist = document.createElement('ul')
//         container.appendChild(seattleUnorderedlist);
//         let s=0;
//         for(let n=0; n<hourarr.length; n++){
//             let li =document.createElement('li');
//             seattleUnorderedlist.appendChild(li);
//             li.textContent=hourarr[n]+':' + this.cookiesPerHour[n]+' Cookies'
//             s=this.cookiesPerHour[n]+s;


//         }
//         let totalli=document.createElement('li')
//         seattleUnorderedlist.appendChild(totalli);
//         totalli.textContent='total :' + s+' Cookies'
// }
// }


// const Tokyo = {
//     cityName:'Tokyo',
//     minCus: 3,
//     maxCus: 24,
//     AvgCookie: 1.2,
//     customer: 0,
//     customerPerHour: [],
//     cookiesPerHour: [],


//     getcusPerHour: function () {
//         for (let x = 0; x < hourarr.length; x++) {
//             this.customerPerHour.push(randomValue(this.minCus, this.maxCus))
//         }
//         console.log(this.customerPerHour);
//     },
//     getavgCookiesperhour: function () {
//         for (let i = 0; i < this.customerPerHour.length; i++) {
//             this.cookiesPerHour.push(Math.ceil(this.AvgCookie * this.customerPerHour[i]))
//         }
//         console.log(this.cookiesPerHour);
//     },


// sendData: function(){
//     let container = document.getElementById('container')
//     let title=document.createElement('h2');
//     container.appendChild(title);
//     title.textContent=this.cityName;
//     console.log("🚀 ~ file: app.js ~ line 29 ~ container", container)
//     let tokyoUnorderedlist = document.createElement('ul')
//         container.appendChild(tokyoUnorderedlist);
//         let s=0;
//         for(let n=0; n<hourarr.length; n++){
//             let li =document.createElement('li');
//             tokyoUnorderedlist.appendChild(li);
//             li.textContent=hourarr[n]+':' + this.cookiesPerHour[n]+' Cookies'
//             s=this.cookiesPerHour[n]+s;


//         }
//         let totalli=document.createElement('li')
//         tokyoUnorderedlist.appendChild(totalli);
//         totalli.textContent='total :' + s+' Cookies'
// }

// }

// const dubai = {
//     cityName:'dubai',
//     minCus: 11,
//     maxCus: 38,
//     AvgCookie: 3.7,
//     customer: 0,
//     customerPerHour: [],
//     cookiesPerHour: [],


//     getcusPerHour: function () {
//         for (let x = 0; x < hourarr.length; x++) {
//             this.customerPerHour.push(randomValue(this.minCus, this.maxCus))
//         }
//         console.log(this.customerPerHour);
//     },
//     getavgCookiesperhour: function () {
//         for (let i = 0; i < this.customerPerHour.length; i++) {
//             this.cookiesPerHour.push(Math.ceil(this.AvgCookie * this.customerPerHour[i]))
//         }
//         console.log(this.cookiesPerHour);
//     },


// sendData: function(){
//     let container = document.getElementById('container')
//     let title=document.createElement('h2');
//     container.appendChild(title);
//     title.textContent=this.cityName;
//     console.log("🚀 ~ file: app.js ~ line 29 ~ container", container)
//     let dubaiUnorderedlist = document.createElement('ul')
//         container.appendChild(dubaiUnorderedlist);
//         let s=0;
//         for(let n=0; n<hourarr.length; n++){
//             let li =document.createElement('li');
//             dubaiUnorderedlist.appendChild(li);
//             li.textContent=hourarr[n]+':' + this.cookiesPerHour[n]+' Cookies'
//             s=this.cookiesPerHour[n]+s;


//         }
//         let totalli=document.createElement('li')
//         dubaiUnorderedlist.appendChild(totalli);
//         totalli.textContent='total :' + s+' Cookies'
// }
// }

// const paris = {
//     cityName:'paris',
//     minCus: 20,
//     maxCus: 38,
//     AvgCookie: 2.3,
//     customer: 0,
//     customerPerHour: [],
//     cookiesPerHour: [],


//     getcusPerHour: function () {
//         for (let x = 0; x < hourarr.length; x++) {
//             this.customerPerHour.push(randomValue(this.minCus, this.maxCus))
//         }
//         console.log(this.customerPerHour);
//     },
//     getavgCookiesperhour: function () {
//         for (let i = 0; i < this.customerPerHour.length; i++) {
//             this.cookiesPerHour.push(Math.ceil(this.AvgCookie * this.customerPerHour[i]))
//         }
//         console.log(this.cookiesPerHour);
//     },


// sendData: function(){
//     let container = document.getElementById('container')
//     let title=document.createElement('h2');
//     container.appendChild(title);
//     title.textContent=this.cityName;
//     console.log("🚀 ~ file: app.js ~ line 29 ~ container", container)
//     let parisUnorderedlist = document.createElement('ul')
//         container.appendChild(parisUnorderedlist);
//         let s=0;
//         for(let n=0; n<hourarr.length; n++){
//             let li =document.createElement('li');
//             parisUnorderedlist.appendChild(li);
//             li.textContent=hourarr[n]+':' + this.cookiesPerHour[n]+' Cookies'
//             s=this.cookiesPerHour[n]+s;


//         }
//         let totalli=document.createElement('li')
//         parisUnorderedlist.appendChild(totalli);
//         totalli.textContent='total :' + s+' Cookies'
// }
// }

// const lima = {
//     cityName:'lima',
//     minCus: 2,
//     maxCus: 16,
//     AvgCookie: 4.6,
//     customer: 0,
//     customerPerHour: [],
//     cookiesPerHour: [],


//     getcusPerHour: function () {
//         for (let x = 0; x < hourarr.length; x++) {
//             this.customerPerHour.push(randomValue(this.minCus, this.maxCus))
//         }
//         console.log(this.customerPerHour);
//     },
//     getavgCookiesperhour: function () {
//         for (let i = 0; i < this.customerPerHour.length; i++) {
//             this.cookiesPerHour.push(Math.ceil(this.AvgCookie * this.customerPerHour[i]))
//         }
//         console.log(this.cookiesPerHour);
//     },


// sendData: function(){
//     let container = document.getElementById('container')
//     let title=document.createElement('h2');
//     container.appendChild(title);
//     title.textContent=this.cityName;
//     console.log("🚀 ~ file: app.js ~ line 29 ~ container", container)
//     let limaUnorderedlist = document.createElement('ul')
//         container.appendChild(limaUnorderedlist);
//         let s=0;
//         for(let n=0; n<hourarr.length; n++){
//             let li =document.createElement('li');
//             limaUnorderedlist.appendChild(li);
//             li.textContent=hourarr[n]+':' + this.cookiesPerHour[n]+' Cookies'
//             s=this.cookiesPerHour[n]+s;


//         }
//         let totalli=document.createElement('li')
//         limaUnorderedlist.appendChild(totalli);
//         totalli.textContent='total :' + s+' Cookies'
// }
// }


// seattle.getcusPerHour();
// seattle.getavgCookiesperhour();
// seattle.sendData();
// Tokyo.getcusPerHour();
// Tokyo.getavgCookiesperhour();
// Tokyo.sendData();
// dubai.getcusPerHour();
// dubai.getavgCookiesperhour();
// dubai.sendData();
// paris.getcusPerHour();
// paris.getavgCookiesperhour();
// paris.sendData();
// lima.getcusPerHour();
// lima.getavgCookiesperhour();
// lima.sendData();

