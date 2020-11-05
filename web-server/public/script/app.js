const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');

p1.textContent = 'loading';
p2.textContent = '';

weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchTerm = search.value;
   fetch('http://localhost:3001/weather?address='+searchTerm)
       .then(res => res.json())
       .then(res => {
           console.log(res);
           if(res.data.error) {
               p1.textContent = res.data.error;
           }else {
               p1.textContent = res.coord.location;
               p2.textContent = res.data.weather_descriptions[0];
           }
       }).catch(e => {
       p1.textContent = 'can\'t get any result pls  try another search term';
   })

})
