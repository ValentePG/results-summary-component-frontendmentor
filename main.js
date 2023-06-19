async function dadosJson () {
  const dados = await fetch('./data.json');
  components = await dados.json();

  components.forEach((component) => {
    console.log(component.category)
    console.log(component.icon)
    console.log(component.score)
  })
}

dadosJson()