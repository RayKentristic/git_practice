// declaring variables for horoscopes and inspiartional messages
const horoscope = ['Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricon'];
const messages = "Do not read in between the lines, take it as it is. Today is the day you get to rule the world. Your heart should not anywhere else than within you. Jiheshimu King. She is not the one for you bro, move on. Kama mbaya ni mbaya. Pick up your crown King. Kwani ni kesho, try harder next time. It is never really the end till you cannot attempt anymore. The force may not be with you but that does not mean you should join the dark side. When life throws problems at you like freethrows, dunk them like Zion. Today might be the best day for you to ask them out. Small small wins boo. ";

//generating random message based on horoscope
let array = messages.split(".");
const randommessage = () => {
    console.log("We predict your horoscope is: " + horoscope[Math.floor(Math.random()*horoscope.length)]);
    console.log("Your age is probably: " + Math.floor(Math.random()*31));
    console.log("Your daily horoscope says: " + array[Math.floor(Math.random()*array.length)]);
};

randommessage();