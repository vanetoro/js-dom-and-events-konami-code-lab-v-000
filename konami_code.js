const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let i = 0;

document.addEventListener('keydown', function init(e){
  const key = parseInt(e.detail || e.which);
  console.log(key, i, code.length)
      if(key === code[i]){
          i++;
        } else {
          alert('I am running')
          i = 0
        }

        if(i === code.length-1 )  {
            alert('Hurray!')
          }
})

