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