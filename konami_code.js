const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let i = 0;
function init() {

document.addEventListener('keydown', function(e){
  const key = parseInt(e.detail || e.which);
  console.log(key, i)
      if(key == code[i]){
        console.log(key == code[i])
             i++;
           }
      if(i === code.length )  {
        console.log('I am running')
          alert('Hurray!')
          } else {
            i = 0
          }
})
}
