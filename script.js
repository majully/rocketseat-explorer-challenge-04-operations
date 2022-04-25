let option;

while(option != 8) {

  option =  Number(prompt(`
    Olá usuário! Digite o número da opção desejada:  
    1. Soma ( + )
    2. Subtração ( - )
    3. Multiplicação ( * )
    4. Divisão ( / )
    5. Resto da divisão ( % )
    6. Par ou ímpar ( ? )
    7. São iguais ou diferentes ( == )
    8. Sair do programa ( X )
  `));

  switch(option) {
    case 1:
      let numberOneSum = prompt("Digite o primeiro número:");
      let numberTwoSum = prompt("Digite o segundo número:");
      let sum = (Number(numberOneSum) + Number(numberTwoSum));
      if(numberOneSum.length == 0 || numberTwoSum.length == 0) {
        alert("Não existem números para calcular.");
      } else {
        alert("A soma dos dois números é: " + sum);
      }
      break;

    case 2:
      let numberOneSubtraction = prompt("Digite o primeiro número:");
      let numberTwoSubtraction = prompt("Digite o segundo número:");
      let subtraction = (Number(numberOneSubtraction) - Number(numberTwoSubtraction));
      if(numberOneSubtraction.length == 0 || numberTwoSubtraction.length == 0) {
        alert("Não existem números para calcular.");
      } else {
        alert("A subtração dos dois números é: " + subtraction);
      }
      break;

    case 3:
      let numberOneMultiplication = prompt("Digite o primeiro número:");
      let numberTwoMultiplication = prompt("Digite o segundo número:");
      let multiplication = (Number(numberOneMultiplication) * Number(numberTwoMultiplication));
      if(numberOneMultiplication.length == 0 || numberTwoMultiplication.length == 0) {
        alert("Não existem números para calcular.");
      } else {
        alert("A multiplicação dos dois números é: " + multiplication);
      }
      break;

    case 4:
      let numberOneDivision = prompt("Digite o primeiro número:");
      let numberTwoDivision = prompt("Digite o segundo número:");
      let division = (Number(numberOneDivision) / Number(numberTwoDivision));
      if(numberOneDivision.length == 0 || numberTwoDivision.length == 0) {
        alert("Não existem números para calcular.");
      } else {
        alert("A divisão dos dois números é: " + division);
      }
      break;

    case 5:
      let numberOneRest = prompt("Digite o primeiro número:");
      let numberTwoRest = prompt("Digite o segundo número:");
      let rest = (Number(numberOneRest) % Number(numberTwoRest));
      if(numberOneRest.length == 0 || numberTwoRest.length == 0) {
        alert("Não existem números para calcular.");
      } else {
        alert("O resto da divisão dos dois números é: " + rest);
      }
      break;

    case 6:
      let numberOneOddEven = prompt("Digite o primeiro número:");
      let numberTwoOddEven = prompt("Digite o segundo número:");
      let oddEven = (Number(numberOneOddEven) + Number(numberTwoOddEven));
      if(numberOneOddEven.length == 0 || numberTwoOddEven.length == 0) {
        alert("Não existem números para calcular");
      }
      else if(oddEven%2 == 0) {
        alert("A soma dos dois números é: Par [" + oddEven + "].");
      }
      else if(oddEven%2 == 1) {
        alert("A soma dos dois números é: Ímpar [" + oddEven + "].");
      }
      break;

    case 7:
      let numberOneSameDifferent = prompt("Digite o primeiro número:");
      let numberTwoSameDifferent = prompt("Digite o segundo número:");
      if(numberOneSameDifferent.length == 0 || numberTwoSameDifferent.length == 0) {
        alert("Não existem números para calcular");
      }
      else if(numberOneSameDifferent == numberTwoSameDifferent) {
        alert("Os números são: Iguais [" + numberOneSameDifferent +"," + numberTwoSameDifferent + "].");
      } else{
        alert("Os números são: Diferentes [" + numberOneSameDifferent +"," + numberTwoSameDifferent + "].");
      }
      break;
    
    case 8:
      alert("Fim!");
      break;

    default:
      alert("Opção inválida. Tente novamente");
  }

}