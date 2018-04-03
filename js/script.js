function operationOnVariables() {
    document.getElementById('result').innerHTML = '';
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
 
    var value = ((a * a) - (2 * a * b) - (b * b));
    document.getElementById('result').innerHTML = value;

    console.log(value);

    if ((value) < 0) {
        alert('wynik ujemny');
    } else if ((value) > 0) {
        alert('Wynik dodatni');
    } 

    if ((value) === 0) {
        alert('Variable is 0');
    } else if ((value) !== 0) {
        alert('Variable value is not 0');
    } 
}
