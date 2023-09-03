const form = document.querySelector("#novoItem");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = event.target.elements["nome"].value;
  const quantidade = event.target.elements["quantidade"].value;

  criaElemento(nome, quantidade);
  form.reset();
});

function criaElemento(nome, quantidade) {
  // <li class="item"><strong>7</strong>Camisas</li>

  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const numeroItem = document.createElement("strong");
  numeroItem.innerHTML = quantidade;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += nome;

  const lista = document.querySelector("#lista");
  lista.appendChild(novoItem);
}
