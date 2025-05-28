function addChar(char){
    document.getElementById('display').value += char;
    // . value +=char : concatena o caracter passado a string  atual 
  /// document.get(display)seleciona o campo de entrada com id=display
}
  function clearDisplay(){
     document.getElementById('dispplay').value = '';
  }
function calculate(){
    try{
        document.getElementById('dispaly').value = eval(document.getElementById('display').value);
    }
    catch(e){
        document.getElementById('display').value = 'ERRO';
    }
}
