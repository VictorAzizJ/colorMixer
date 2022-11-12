let trash = document.getElementsByClassName("dump");
let blend = document.getElementsByClassName("blending")

Array.from(blend).forEach(function(element) {
  element.addEventListener('click', function(){
   console.log('We Mixing')
    const hex = this.parentNode.childNodes[1].innerText;
    const sechex = this.parentNode.childNodes[3].value;
    const colorblock = hex.substring(1);
    const colorblock2 = sechex.substring(1);
    const blendable = [parseInt(colorblock[0] + colorblock[1], 16), parseInt(colorblock[2] + colorblock[3], 16), parseInt(colorblock[4] + colorblock[5], 16)];
    const blendable2 = [parseInt(colorblock2[0] + colorblock2[1], 16), parseInt(colorblock2[2] + colorblock2[3], 16), parseInt(colorblock2[4] + colorblock2[5], 16)];
    console.log(hex)
    console.log(sechex)
    console.log(colorblock)
    console.log(colorblock2)
    console.log(blendable)
    console.log(blendable2)
    const blended = [ 
      (1 - 0.5) * blendable[0] + 0.5 * blendable2[0], 
      (1 - 0.5) * blendable[1] + 0.5 * blendable2[1], 
      (1 - 0.5) * blendable[2] + 0.5 * blendable2[2]
  ];
  //divide by 2 using '//' instead of  int_to_hex (Mr.Mike K)
        function int_to_hex(num)
          {
              var hex = Math.round(num).toString(16);
              if (hex.length == 1)
                  hex = '0' + hex;
              return hex;
          }

        
        //scoping issues need help i think
    const solution = '#' + int_to_hex(blended[0]) + int_to_hex(blended[1]) + int_to_hex(blended[2]);
  console.log(solution)
    fetch('mix', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'colorOne': hex,
        'colorTwo': sechex,
        'Blended': solution,
        
      })
    }).then(function (response) {
      window.location.reload()
      //maybe comment out so available to look at object
    })
  });
});
Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const hex = this.parentNode.childNodes[1].innerText
        fetch('mix', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'colorOne': hex,
          })
        }).then(function (response) {
          window.location.reload()
          //maybe comment out so available to look at object
        })
      });
});
