const hintBtn = document.querySelector('#hintBtn');
const txt = document.querySelector('#txt');
hintBtn.addEventListener('click', () => {
    writeTxt ();
})
 function writeTxt () {
    const text = 'To walk unsteadly, as like a baby';
    txt.textContent = '';
    let count = 0;
    const id = setInterval(() => {
        if (count === text.length - 1) clearInterval(id)
            txt.textContent += text[count];
            count++;
        },100)        
 }
 let score = 0;
 const checkBtn = document.querySelector('#checkBtn');
 checkBtn.addEventListener('click', () => {
    console.log("I have just been clicked.")
    document.querySelector('#cup > i').textContent = score;
    score += 5;
    document.querySelector('#action').style.backgroundImage = `url('confetti.gif)`;
    const tid = setTimeout(() => {
        document.querySelector('#action').style.backgroundImage = `url('confetti.gif)`;
        clearTimeout(tid);
    }, 2000);
 });
function showicon () {
    return(`
    <svg>
    <use href ='#icon'></use>
    </svg>`
    );
}
document.querySelector('#container').innerHTML = showicon();
//STRING METHODS
//.slice(start, end) //this slices a portion of a string
//.concat(...strings) //joins all chars in a string
//.trim()   //removes spaces at the begining and end of a string
//.at (...index)  //chooses the char at the index
//.length  //tells how many chars are in a string
//toLowercase()  //writes all the chars in lower case
//toUppercase()  //writes all the chars in upper case
//...