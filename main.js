import {
    getRandomScores,
    getStudentJSON,
    runTitle
} from './lib.js';

runTitle();
warmup1();

function warmup1() {
    console.log("Exercise week 1");

    document.querySelector("#button-1a").addEventListener('click', function warmup1() {
        console.log('click ok');

        const p = document.createElement('p');
        p.innerHTML = "Hallo, dit is de oefening van Michée.";

        // Selecteer de div met id "content-1" en vervang de inhoud
        const content = document.getElementById("content-1");
        content.innerHTML = ""; // Leeg de huidige inhoud
        content.append(p); // voeg het nieuwe p-element toe



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