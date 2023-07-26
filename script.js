function calcular(){
    let precoCombustivel = document.getElementById("precodocombustivel").value;
    let mediaDoCarro = document.getElementById("mediadocarro").value;
    let distancia = document.getElementById("distanciaapercorrer").value; 

    let litrosConsumidos = (distancia/mediaDoCarro).toFixed(2);
    let res = (litrosConsumidos * precoCombustivel).toFixed(2); 

    document.getElementById("text_area").innerText= "Consumido " + litrosConsumidos + " litros de combustível nessa viagem, com um total de R$ " + res + " gastos para percorrer " + distancia + " Km.";

}









