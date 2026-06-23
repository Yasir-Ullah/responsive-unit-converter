// var feet = document.getElementById("feet");
// var inch = document.getElementById("inch");
// var clearBtn = document.getElementById("clearBtn");

// feet.addEventListener("input", function () {
//   let f = this.value;
//   let i = f * 12;
//   if (isNaN(i) === false) {
//     if (!Number.isInteger(i)) {
//       i = i.toFixed(2);
//     }
//     inch.value = i;
//   }else{
//         inch.value = '';

//     alert('Not a number');
//   }
// });

// inch.addEventListener("input", function () {
//   let i = this.value;
//   let f = i / 12;
//   if (isNaN(f) === false) {
//     if (!Number.isInteger(f)) {
//       f = f.toFixed(2);
//     }
//     feet.value = f;
//   }else{
//     feet.value = '';
//     alert('Not a number');
//   }
// });

// clearBtn.addEventListener("click", function () {
//   feet.value = "";
//   inch.value = "";
// });


var feet = document.getElementById('feet');
var inch = document.getElementById('inch');
var clearBtn = document.getElementById('clearBtn');

feet.addEventListener('input', function(){
  let f = this.value
  let i = f * 12;
  if(isNaN(i) === false){
    if(!Number.isInteger(i)){
      i = i.toFixed(2)
    }
     inch.value = i;
  }else{
        inch.value = '';

    alert('Not a number');
  }
 

})
inch.addEventListener('input', function(){
  let i = this.value
  let f = i / 12;
  if(isNaN(f) === false){
    if(!Number.isInteger(f)){
      f = f.toFixed(2);
    }
     feet.value = f;
  }else{
    feet.value = '';
    alert('Not a number');
  }
 
  
})

clearBtn.addEventListener("click", function () {
  feet.value = "";
  inch.value = "";
});
