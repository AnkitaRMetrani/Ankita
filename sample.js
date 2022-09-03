$(function(){

    $('#add').click(function add(){
        const num1 = parseInt(document.getElementById('num1').value);
        const num2 = parseInt(document.getElementById('num2').value);
        const result = document.getElementById('result');
            if (num1 && num2 !== NaN) {
                let sum = num1 + num2;
                result.value = sum;
                return false;

            } 
            else {
                alert("Enter Valid Number");
                }
    });

    $('#sub').click(function sub(){
        const num1 = parseInt(document.getElementById('num1').value);
        const num2 = parseInt(document.getElementById('num2').value);
        const result = document.getElementById('result');
            if (num1 && num2 !== NaN) {
                let res = num1 - num2;
                result.value = res;
                return false;

            } 
            else {
                alert("Enter Valid Number");
                }
    });
    
    $('#multiply').click(function multiply(){
        const num1 = parseInt(document.getElementById('num1').value);
        const num2 = parseInt(document.getElementById('num2').value);
        const result = document.getElementById('result');
            if (num1 && num2 !== NaN) {
                let res = num1 * num2;
                result.value = res;
                return false;

            } 
            else {
                alert("Enter Valid Number");
                }
    });

    $('#divide').click(function divide(){
        const num1 = parseInt(document.getElementById('num1').value);
        const num2 = parseInt(document.getElementById('num2').value);
        const result = document.getElementById('result');
            if (num1 && num2 !== NaN) {
                let res = num1 / num2;
                result.value = res;
                return false;

            } 
            else {
                alert("Enter Valid Number");
                }
    });

    $('.rslides').responsiveSlides({
        auto: true,            
        speed: 1000,           
        timeout: 4000
    })
    
  });

  

  