const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let i = 0;
  function init(e){
    console.log(e)
    const key = parseInt( e.which);
    console.log(key)
        if(key === code[i]){
            i++;
          } else {
            i = 0
          }
        if(i === code.length )  {
            alert('Hurray!')
            }

}
document.addEventListener('keydown', init)
