let camiseta = prompt("Me diga a cor da sua camiseta");
let calca = prompt("Me diga a cor da sua calça");

camiseta = camiseta.toLowerCase();
calca = calca.toLowerCase();

if (camiseta === "vermelha" && calca === "amarela") {
  alert("Kertchup e mostarda");
} else if (camiseta === "amarela" && calca === "preta") {
  alert("Agora você é uma abelha");
} else if (camiseta === "branca" && calca === "jeans") {
  alert("Look clássico! Não tem como errar");
} else {
  alert("Hmm, nada a comentar...");
}
