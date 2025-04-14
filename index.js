/* this changes the text inside of an element
document.querySelector('#user > b').textContent = 'Henry';
document.querySelector('#user > i').textContent = '?'; 
*/
// this is an array of numbers
// document.querySelector('output').textContent = typeof '355.77';
// [1,2,'computer',4];
// const s = 'a very long convoy, 200 cars long. Really!!!!';
// document.querySelector('output').textContent = s;
// document.querySelector('output').textContent = ['pizza', 2, 'computer', 4.5][2];
const eye = document.querySelector('#eye');
const output = document.querySelector('output');
const ipt = document.querySelector('input');
const fm = document.querySelector('form');
const pop = document.querySelector('#pop');
const user = document.querySelector('#user');
const start = document.querySelector('#start');
const pan =  document.querySelector('#panel');
//this unmaskes the password
eye.addEventListener('mouseup', () => {
    ipt.type = 'password';
});
//this submits the password with form
eye.addEventListener('mousedown', () => {
    ipt.type = 'text';
});
//this maskes the password
console.log("running...");
fm.addEventListener('submit', (e) => {
    e.preventDefault(); //this will stop the page from reloading
    const pd = 'HENx1324';
    if (pd === ipt.value){
        user.remove();
        fm.remove();
        
        output.textContent = 'Signing you in...';
         const timeoutID = setTimeout(() => {
            output.remove();
             pop.showPopover();
            clearTimeout(timeoutID);
        }, 3000);
    } else{
        output.textContent = 'Wrong password';
    }
});
//this shows/hides the #panel
start.addEventListener('click', () => {
    pan.classList.toggle('on');
});
//this formats a Unix number into a human-readable
const dob = new Date ('02/04/2012').getTime();//date format in JavaScript mm-yyyy
pan.querySelector('#dob').textContent =Intl.DateTimeFormat('en', {dateStyle: 'full'}).format(dob);

//FUNCTIONS
//A function is a group of statements that does not run unless when called
function caculator () {
    console.log(2 + 4);
    console.log(10 - 5);
    console.log(10 / 2);
    console.log(3 * 3);
    console.log(5 % 3); //modulus 9short form is mod); the remeinder of
}
caculator();
function callConfetti(){
    /*
    const t = ' qwerty';
    const u = ' ytrewq';
    console.log(t + u); //concatenation: join string togeather
    */
   const d = new Date("02/04/2012").getDate();//14
   const m = new Date("02/04/2012").getMonth();//3
   const today = Date.now();
   console.log(new Date(today).getDate)
   if (new Date(today).getDate() === d && new Date(today).getMonth() === m) {
    pan.classList.add('bgi');
   }
    
   console.log(d);
   console.log(m)
};
callConfetti();
