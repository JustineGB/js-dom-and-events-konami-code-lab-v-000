const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0 

function init() {
  function 
  document.body.addEventListener('keydown', function(e){
  const key = parseInt(e.detail || e.location);
  console.log(`${e.detail}`);
  console.log(`${e.which}`);
    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("yay!");

        index = 0;
      }
    } else {
      index = 0;
    }
  });

}