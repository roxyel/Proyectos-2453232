/*import fetch from 'node-fetch';
const URL='https:pokeapi.co/api/v2/pokemon'
fetch(URL)
    .then(res=>res.json())
    .then(data=>{
        let vec=Object.values(data);
        vec.forEach(element => {
            console.log(element);
        }
);
})
async function loader(){
    const res=await fetch(URL);
    const data=await res.json();
    console.log('..................')
    console.log(data)
}

loader()

import fetch from 'node-fetch';
const URL='https://api.covid19api.com/summary'
fetch(URL)
    .then(res=>res.json())
    .then(data=>{
        let vec=Object.values(data);
        vec.forEach(element => {
            console.log(element);
        }
);
})
async function loader(){
    const res=await fetch(URL);
    const data=await res.json();
    console.log('..................')
    console.log(data)
}

loader()

for (let i = 0; i < vec.lenght; i++) {
    for (let j = 0; j < vec[3]. lenght; j++) {
        console.log(vec[3][j].Country);
    }
}*/

import fetch from 'node-fetch';
const URL='https://api.covid19api.com/summary'
 fetch(URL)
 .then(res=>res.json())
 .then(data=>{
     let vec=Object.values(data);
    //  vec.forEach(element => {
    //     console.log(typeof(element),'---',element); 
    //  }
   // );
     
   //console.log(vec);
    for (let i = 0; i < vec.length; i++) {
         for (let j = 0; j < vec[3].length; j++) {            
            console.log(vec[3][j].CountryCode);
            console.log(vec[3][j].TotalDeaths);
         }
        
      }

})


// async function loader(){
//     const res=await fetch(URL);
//     const data= await res.json();
//     console.log('........................')
//     console.log(data)
// }

// loader()

//codigo pais

/*import fetch from 'node-fetch';
const URL='https://covid-193.p.rapidapi.com/countries'
 fetch(URL)
 .then(res=>res.json())
 .then(data=>{
     let vec=Object.values(data);
    //  vec.forEach(element => {
    //     console.log(typeof(element),'---',element); 
    //  }
   // );
     
   //console.log(vec);
    for (let i = 0; i < vec.length; i++) {
         for (let j = 0; j < vec[3].length; j++) {            
            console.log(vec[3][j].loc);
         }
        
      }

});*/