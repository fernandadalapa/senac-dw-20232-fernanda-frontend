//estudo para a prova

const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sCnpj = document.querySelector('#m-cnpj')
const sCidade = document.querySelector('#m-cidade')
const sUf = document.querySelector('#m-uf')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    sNome.value = itens[index].nome
    sCnpj.value = itens[index].cnpj
    sCidade.value = itens[index].cidade
    sUf.value = itens[index].uf
    id = index
  } else {
    sNome.value = ''
    sCnpj.value = ''
    sCidade.value = ''
    sUf.value = ''
  }
  
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.cnpj}</td>
    <td>R$ ${item.cidade}</td>
    <td>R$ ${item.cidade}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (sNome.value == '' || sCnpj.value == '' || sCidade.value == '' || sUf.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].nome = sNome.value
    itens[id].cnpj = sCnpj.value
    itens[id].cidade = sCidade.value
    itens[id].uf = sUf.value
  } else {
    itens.push({'nome': sNome.value, 'cnpj': sCnpj.value, 'cidade': sCidade.value, 'uf': sUf.value})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()