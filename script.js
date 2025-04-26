const frases = [
    "Votou no LULA=LGBT.",
    "A vida é agora.",
    "Você é mais forte do que pensa.",
    "Nunca é tarde para recomeçar.",
    "Confie no processo.",
    "Foque no que importa."
  ];
  
  function gerarfrase() {
    const index = Math.floor(Math.random() * frases.length);
    document.getElementById('frase').innerText = frases[index];
  }
  