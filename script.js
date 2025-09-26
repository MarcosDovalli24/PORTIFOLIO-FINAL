document.addEventListener('DOMContentLoaded', function() {
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
  const body = document.body;

  // Mostra/oculta menu de acessibilidade
  botaoDeAcessibilidade.addEventListener('click', function() {
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

    const menuAberto = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
    botaoDeAcessibilidade.setAttribute('aria-expanded', !menuAberto);
  });

  // Aumenta/diminui fonte
  document.getElementById('aumentar-fonte').addEventListener('click', function() {
    body.style.fontSize = (parseInt(window.getComputedStyle(body).fontSize) + 2) + 'px';
  });
  document.getElementById('diminuir-fonte').addEventListener('click', function() {
    body.style.fontSize = (parseInt(window.getComputedStyle(body).fontSize) - 2) + 'px';
  });

  // Alterna contraste
  const alternaContraste = document.getElementById('alterna-contraste');
  alternaContraste.addEventListener('click', function() {
    body.classList.toggle('alto-contraste');
  });

  // Navegação entre seções com TAB
  const secoes = document.querySelectorAll("section[tabindex='0']");
  let indiceAtual = 0;
  secoes[indiceAtual].focus();

  document.addEventListener("keydown", function(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      secoes[indiceAtual].classList.remove('foco-tab'); // remove destaque
      indiceAtual = event.shiftKey
        ? (indiceAtual - 1 + secoes.length) % secoes.length
        : (indiceAtual + 1) % secoes.length;
      secoes[indiceAtual].focus();
      secoes[indiceAtual].classList.add('foco-tab'); // adiciona destaque discreto
    }
  });

  // ScrollReveal
  if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal().reveal('#inicio', { delay: 500, origin: 'top', distance: '50px', duration: 1000, opacity: 0 });
    ScrollReveal().reveal('#portfolio', { delay: 500, origin: 'left', distance: '50px', duration: 1000, opacity: 0 });
    ScrollReveal().reveal('#contato', { delay: 500, origin: 'bottom', distance: '50px', duration: 1000, opacity: 0 });
  }
});
