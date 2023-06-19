async function dadosJson () {
  const dados = await fetch('./data.json');
  components = await dados.json();
}