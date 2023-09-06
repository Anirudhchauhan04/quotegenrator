//Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes =[{
    quote:`"Education is the most powerful weapon which you can use to change the world."`,
    person:` Nelson Mandela`
}, {
    quote:`"There is always light. If only we're brave enough to see it. If only we're brave enough to be it."`,
    person:`Amanda Gorman`
}, {
    quote:`"If you want to lift yourself up, lift up someone else."`,
    person:`Booker T. Washington`
}, {
    quote:`"I have learned not to allow rejection to move me."`,
    person:`Cicely Tyson`
}, {
    quote:`"I scorched the earth with my talent and I let my light shine."`,
    person:`André Leon Talley`
}, {
    quote:`"You are braver than you believe, stronger than you seem, and smarter than you think."`,
    person:`A.A. Milne`
}, {
    quote:`"It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent."`,
    person:`Madeleine Albright`
}, {
    quote:`"You can't rely on how you look to sustain you, what sustains us, what is fundamentally beautiful is compassion; for yourself and your those around you."`,
    person:`Lupita Nyong'o`
}, {
    quote:`"Attitude is the 'little' thing that makes a big difference."`,
    person:`Winston Churchill`
}, {
    quote:`"We will fail when we fail to try."`,
    person:`Rosa Parks`
}, {
    quote:`"Once you face your fear, nothing is ever as hard as you think."`,
    person:`Olivia Newton-John`
}, {
    quote:`"Don't sit down and wait for the opportunities to come. Get up and make them."`,
    person:`Madam C.J Walker`
}, ];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})