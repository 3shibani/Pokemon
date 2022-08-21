 //SELECTORS
 
 const next = document.querySelector('.next');
 var species_value = document.querySelector('.species_value');
 var types_value=document.querySelector('.types_value');
 var ab1=document.querySelector('.ab1');
 var ab2=document.querySelector('.ab2');
 var ab3=document.querySelector('.ab3');
 var baseExp_value=document.querySelector('.baseExp_value');
 var mv1=document.querySelector('.mv1');
 var mv2=document.querySelector('.mv2');
 var mv3=document.querySelector('.mv3');
//  var heldItems1=document.querySelector('.heldItems1');
//  var heldItems2=document.querySelector('.heldItems2');
 var ht_val=document.querySelector('.ht_val');
 var wt_val=document.querySelector('.wt_val');

 //API FETCH

let data;
async function getApi(url){
    const response = await fetch(url);

     data = await response.json();
    console.log(data);   

}

getApi('https://pokeapi.co/api/v2/pokemon?limit=151');


//FUNCTION CALL UPON CLICK EVENT ON THE NEXT BUTTON


async function poke(link){
    const response= await fetch(link);

    //Particular pokemon details is stored in poke_data
    poke_data = await response.json();


    species_value.innerText=poke_data.species.name;
    types_value.innerText=poke_data.types[0].type.name;
    ab1.innerText=poke_data.abilities[0].ability.name;
    ab2.innerText=poke_data.abilities[1].ability.name;
    // ab3.innerText=poke_data.abilities[2].ability.name;
    baseExp_value.innerText=poke_data.base_experience;
    mv1.innerText=poke_data.moves[0].move.name;
    mv2.innerText=poke_data.moves[1].move.name;
    mv3.innerText=poke_data.moves[2].move.name;
    document.querySelector('.img').src=poke_data.sprites.other.dream_world.front_default;
    ht_val.innerText=poke_data.height;
    wt_val.innerText=poke_data.weight;
}


//ONCLICK LISTNER FOR THE NEXT BUTTON

next.addEventListener("click",()=>{
    let num = Math.floor((Math.random() * 151) );
        console.log(num);
    var store = data.results[num].url;
    poke(store);
})

/*Particle js*/
// particlesJS("particles-js", {"particles":{"number":{"value":293,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":3.40839926962873,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":144.21690222094043,"color":"#ffffff","opacity":0.20030125308463947,"width":1.6024100246771156},"move":{"enable":true,"speed":12.819280197416926,"direction":"none","random":false,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":true,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":143.85614385614386,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":5.114885114885115,"opacity":8,"speed":3},"repulse":{"distance":103.89610389610391,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

