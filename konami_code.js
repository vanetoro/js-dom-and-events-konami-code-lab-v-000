const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]



  function init(){
    let i = 0;
  document.body.addEventListener('keydown', function(e){
    const key = e.detail || e.which;
    console.log(key)
        if(key === code[i]){
            i++;
          }
        if(i === code.length )  {
            alert('Hurray!')
            }else {
              i = 0
            }
})
}
