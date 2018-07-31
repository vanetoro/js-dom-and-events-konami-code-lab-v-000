const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]




function init() {
      let i = 0;

      document.addEventListener('keydown', function(e){
          const key =parseInt(e.detail || e.which);
      })

}

  function init(){

  document.body.addEventListener('keydown', function(e){
  
    console.log(key)
        if(key === code[i]){
            i++;
          }
        if(i === code.length )  {
            alert('Hurray!')
            }
          }
          else {
              i = 0

})
}
