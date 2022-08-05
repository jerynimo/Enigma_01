function cipher1(str) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ.!?1234567891.!?';
    let str2 = [];
    let n = 0;
    while (n < str.length) {
      let indx = alphabet.indexOf(str[n]);
      if (indx < 0) {
        str2 = str2 + ' ';
        n++;
      } else {
        let indx2 = alphabet[indx+13];
        str2 = str2 + indx2;
        n++;
      }
    }
    return str2;
  }
  

  let translate = document.querySelector('#press');
  let translated = document.querySelector(".outText");
  
  translate.addEventListener('click', function() {
    
    let input2 = document.getElementById('intext').value;
    let input = "'"+input2+"'";
    let translates = cipher1(input.toUpperCase());
    
    translated.innerText = translates;
  });

  console.log(input2)