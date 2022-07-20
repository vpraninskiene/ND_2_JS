"use strict"

// Pirmoji užduotis


while(isNaN(kaina)|| kaina <= 0) {
    var kaina = prompt("Įveskite prekės kainą")
    kaina = Number(kaina)
}

var pristatymas = confirm("Ar reikalingas pristatymas į namus?")
var pristatymoKaina = 5
var viso = parseInt(pristatymoKaina, 10) + parseInt(kaina, 10)

if (pristatymas == true) {
    var lokacija = prompt("Į kurį miestą reikės pristatyti?")
    console.log(`Prekės kaina: ${kaina} €`)
    console.log(`Pristatymas: ${pristatymoKaina} € `)
    console.log(`Iš viso: ${viso} € `)
    console.log(`Prekę pristatysime į ${lokacija} per 1-3 dienas. `)
        
} else {
    console.log (`Prekės kaina: ${kaina} €`) 
    console.log(`Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a`)
} 

console.log("======")


// Antroji užduotis


var countries = [
    {country:"Niue", area: 260.1243, population: 1626},
    {country: "Tokelau", area: 10.457, population: 1357},
    {country: "Montserrat", area: 100, population: 4992},
    {country: "Saint Helena", area:390, population: 6077},
    {country: "Nauru", area: 20.985, population: 10827}
]


for(var x of countries){
    
    var areaPerPerson = (parseInt(x.area, 10) * parseInt(1000000, 10) / parseInt(x.population, 10))
    areaPerPerson = areaPerPerson.toFixed(2)
}


for(var x of countries){
    print(x.country, x.area, x.population)
  }
  
  function print(country, area, population){
      console.log(`Šalis: ${country}, joje gyvena ${population} gyventojų.`)
      console.log(`Valstybės plotas: ${area.toFixed(2)} km², plotas tenkantis vienam gyventojui: ${areaPerPerson} m2`)
      console.log("======")
  }