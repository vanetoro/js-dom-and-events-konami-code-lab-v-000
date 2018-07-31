const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let i = 0;
function init() {
  if(i === code.length-1 )  {
      alert('Hurray!')
    }
}
document.addEventListener('keydown', function(e){
  const key = parseInt(e.detail || e.which);
  console.log(key, i, code.length)
      if(key === code[i]){
          i++;
        } else {
          console.log('I am running')
          i = 0
        }

        
})
