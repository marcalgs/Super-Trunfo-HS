var carta1 = {
  nome: "Asa da morte",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWCxA0MvGgkVn2dE-pbihD4nFN_3etgXSSqQ&usqp=CAU",
  atributos: {
    ataque: 12,
    defesa: 12,
    mana: 3
  }
};

var carta2 = {
  nome: "Mecha Jaraxxus",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgyH09KjI7FlVVUeAfrfeyqPw4SNbDG-hwjg&usqp=CAU",
  atributos: {
    ataque: 3,
    defesa: 15,
    mana: 5
  }
};

var carta3 = {
  nome: "Alexstraza",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6hkPmucPPM71a5dpZmz3E-YIJooezy930w&usqp=CAU",
  atributos: {
    ataque: 8,
    defesa: 7,
    mana: 6
  }
};
var carta4 = {
  nome: "Malygos",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQAYT1QsyD0o81lPbtC-cimvjIKTfIk4QRQ&usqp=CAU",
  atributos: {
    ataque: 4,
    defesa: 12,
    mana: 10
  }
};

var carta5 = {
  nome: "Rei Mó",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqM1ApyNQeWU0uqGVO3eIamBwz6H01FShjA&usqp=CAU",
  atributos: {
    ataque: 8,
    defesa: 8,
    mana: 5
  }
};
var carta6 = {
  nome: "Ragnaros, o Senhor do fogo",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUSCI7XeTiAYEopwDMv9iMgSRdu-rOrrOUJw&usqp=CAU",
  atributos: {
    ataque: 8,
    defesa: 8,
    mana: 8
  }
};
var carta7 = {
  nome: "Leeroy Jenkins",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWrrac5wXl8g2-cNYXhpBf2FlBUJY93HDw4g&usqp=CAU",
  atributos: {
    ataque: 8,
    defesa: 2,
    mana: 6
  }
};
var carta8 = {
  nome: "Sylvanas Correvento",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpHGBU9NkGhyGK4I4e9hk_EL86ILoFpO_X_g&usqp=CAU",
  atributos: {
    ataque: 5,
    defesa: 5,
    mana: 8
  }
};

//[] criando lista.
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 8);
  cartaMaquina = cartas[numeroCartaMaquina];
  cartas.splice(numeroCartaMaquina, 1);

  var numeroCartaJogador = parseInt(Math.random() * 7);
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);
  console.log(cartaMaquina);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  //GetElementsByName, está pegando o atributo do Input type NAME.
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    //[i] indice.
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }

  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  //carta-jogador, DIV pegando do HTML
  var divCartaJogador = document.getElementById("carta-jogador");
  //($) avisa q p código é de javascript
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; heigth: inherit; position: absolute;">';

  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value= '" +
      atributo +
      "'>" +
      atributo +
      "" +
      cartaJogador.atributos[atributo] +
      "<br>";
  }

  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  //carta-jogador, DIV pegando do HTML
  var divCartaMaquina = document.getElementById("carta-maquina");
  //($) avisa q p código é de javascript
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; heigth: inherit; position: absolute;">';

  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      "" +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }

  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}