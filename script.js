var  textoParaCriptografar  =  document . querySelector ( "#textarea-codificar" );


function criptografar () {

	var texto =  textoParaCriptografar.value;

	var resultadoDaCriptografia = texto.replace(/e/g, "enter") .replace(/i/g, "imes") 
	.replace(/a/g, "ai") .replace(/o/g, "ober") .replace(/u/g, "ufat");

	document.getElementById("descriptografado").style.display = ""

	document.getElementById("texto-descriptografado").value = resultadoDaCriptografia

}


function descriptografar() {

	var texto =  textoParaCriptografar.value;

	var resultadoDaDescriptografia = texto.replace(/enter/g,"e").replace(/imes/g,"i")
	.replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");

	document.getElementById("descriptografado").style.display = ""

	document.getElementById("texto-descriptografado").value = resultadoDaDescriptografia

}

function copy() {
  let copyText = document.querySelector("#texto-descriptografado");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector(".botão-copiar").addEventListener("click", copy);
