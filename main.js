import {
    getRandomScores,
    getStudentJSON,
    runTitle
} from './lib.js';

runTitle();
warmup1();


function warmup1() {
    console.log("Exercise week 1");
    document.querySelector("#button-1a").addEventListener('click', function warmup1(){
    console.log('click ok');

    const p = document.createElement('p');
    p.innerHTML = "Hallo, dit is de oefening van Michée";
    
    const content = document.getElementById('content-1');
    content.innerHTML = '';
    content.append(p);
    });

 document.querySelector("#button-1b").addEventListener('click', function() {
   const section = document.getElementById('section-1');
   section.style.backgroundColor = 'lightblue';
   }); 

document.querySelector('#button-1c').addEventListener('click', function(){
    const h1 = document.createElement('h1');
    h1.innerHTML = "Ik ben er klaar voor";

    const content = document.getElementById('content-1');
    content.append(h1);
   });
}





function warmup2() {
    console.log("Exercise week 2");
    const scores = getRandomScores(10);
}

function warmup3() {
    let student = getStudentJSON();
}

function warmup4() {
    let main, min, max;
}

function warmup5() {

}