const tarefas = []
const tarefasConcluidas = []
const abaDone = document.getElementById("aba-done")
const abaToDo = document.getElementById("aba-to-do")
const btnSend = document.getElementById("send-task")
const dropTask = document.getElementById("remover-tarefa")
const doneTask = document.getElementById("concluir-tarefa")
const containerTarefas = document.getElementById("container-tarefas")
updateAll()
function updateAll(){
    containerTarefas.innerText = ""
    if (abaToDo.style.color == "rgb(82, 113, 255)"){
        for (let i in tarefas){
            containerTarefas.innerHTML += `<div class="tarefa">
                <span class="nome-da-tarefa">${tarefas[i]}</span>
                <button class="acao-de-tarefa remover-tarefa" onclick="removerTarefa(this)"></button>
                <button class="acao-de-tarefa concluir-tarefa" onclick="concluirTarefa(this)"></button>
            </div>`
        }} else {
            for (let i in tarefasConcluidas){
            containerTarefas.innerHTML += `<div class="tarefa">
                <span class="nome-da-tarefa">${tarefasConcluidas[i]}</span>
                <button class="acao-de-tarefa remover-tarefa" onclick="removerTarefa(this)"></button>
            </div>`
        }}
    console.log(`Tarefas: ${tarefas}\nTarefas Concluídas: ${tarefasConcluidas}`)
}

abaToDo.addEventListener("click", function(){
    abaToDo.style.color = "#5271FF"
    abaToDo.style.borderBottom = "5px solid #5271FF"
    abaDone.style.color = "black"
    abaDone.style.borderBottom = "5px solid white"
})

abaDone.addEventListener("click", function(){
    abaDone.style.color = "#5271FF"
    abaDone.style.borderBottom = "5px solid #5271FF"
    abaToDo.style.color = "black"
    abaToDo.style.borderBottom = "5px solid white"
})

btnSend.addEventListener("click", function(){
    let res = document.getElementById('digitar-tarefa-a-ser-enviada')
    let content = res.value
    tarefas.push(content)
    updateAll()
    res.value = ""
})

function removerTarefa(element){
    const divPai = element.parentNode
    divPai.querySelector('span.nome-da-tarefa')
    let tarefa = divPai.textContent.trim()
    console.log('to aqui')
    if (tarefas.includes(tarefa)){
        let posicao = tarefas.indexOf(tarefa)
        tarefas.splice(posicao, 1)
        console.log('to aqui1')
    } else {
        let posicao = tarefasConcluidas.indexOf(tarefa)
        tarefasConcluidas.splice(posicao, 1)
        console.log('to aqui2')
    }
    updateAll()
}

function concluirTarefa(element){
    const divPai = element.parentNode
    divPai.querySelector('span.nome-da-tarefa')
    let tarefa = divPai.textContent.trim()
    let posicao = tarefas.indexOf(tarefa)
    tarefas.splice(posicao, 1)
    tarefasConcluidas.push(tarefa)
    updateAll()
}

abaDone.addEventListener('click', function(){
    updateAll()
})

abaToDo.addEventListener('click', function(){
    updateAll()
})