//var a = -8;
//var b = 5;
//
//var value =((a * a) - (2 * a * b) - (b * b));
//console.log((a * a) - (2 * a * b) - (b * b));
//
//if (value >= 0 ) {
//    alert('Wynik ujemny');
//  } else if (value <= 0 ) {
//    alert('Wynik dodatni');
//  }

function myFunction(){
    document.getElementById('result').innerHTML = '';
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
 
    var value = ((a * a) - (2 * a * b) - (b * b));
    document.getElementById('result').innerHTML = value;


    console.log(value);


    if ((value) < 0) {
        alert('wynik ujemny');
    } else if ((value) > 0) {
        alert('Wynik dodatni');
    } 

    var whatIsBigger = value;

    if ((value) === 0) {
        alert('Variable is 0');
    } else if ((value) !== 0) {
        alert('Variable value is not 0');
    } 

    
console.log(whatIsBigger);
}
