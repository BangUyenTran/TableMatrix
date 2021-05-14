const row = document.getElementById('row');
const column = document.getElementById('col');
const input = document.getElementsByClassName('btn-input')
const btn = document.getElementById('btn-create');
const table = document.getElementById('table');
const alertBtn = document.getElementsByClassName('alert')
const createTable = (event) => {
    event.preventDefault()
    table.innerHTML = ''
    const rowValue = row.value;
    const colValue = column.value;
    for(let i = 0; i < input.length; i++){
        if(input[i].value === ''){
            input[i].style.border ='1px solid red'
            alertBtn[i].style.display = 'block'
        }
         else{
        input[i].style.border ='1px solid black'
        alertBtn[i].style.display = 'none'
       let numberOfBox = rowValue * colValue;
            table.style.gridTemplateColumns = `repeat(${colValue},1fr)`;
            table.style.gridTemplateRows = `repeat(${rowValue},1fr)`
            for (let j = 0; j < numberOfBox; j++) {
                const box = document.createElement('div');
                box.classList.add('box');
                table.appendChild(box)
            }
    }
    }

}

btn.addEventListener('click', createTable)