const gerarLista = document.querySelector('[data-list]')
const gerarScore = document.querySelector('[data-results]')
const gerarButton = document.querySelector('[data-summary]')
let auxiliar = 0
let media = 0
let listaDeDados = []

async function dadosJson () {
  listaDeDados = await fetch('./data.json');
  const components = await listaDeDados.json();

  components.forEach((component) => {

    auxiliar = auxiliar += component.score
    gerarLista.innerHTML += `<li class="${component.category}
    list"><p>${component.category}</p><span class="info"><strong>
    ${component.score}</strong><span>/ 100</span></span></li>
    `
    
  })
  
  gerarButton.innerHTML += `<a class="button" href="@">Continue</a>`
  
  media = auxiliar / components.length
  
  gerarScore.innerHTML += `<div class="results-title">
  <h1>Your Result</h1>
  </div>
  <div class="results-circle">
  <p><strong>${media.toFixed(0)}</strong></p>
  <p>of 100</p>
  </div>
  <div class="results-text">
  <h1>Great</h1>
  <p>You scored higher than 65% of the people who have taken these tests.</p>
  </div>`
}

dadosJson()