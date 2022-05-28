function getName() {
   
    let container = document.querySelector('.container');

    let div = document.createElement('div');
    div.classList.add('box-name');

    let span = document.createElement('span');
    span.classList.add('circle-name');

    let p = document.createElement('p');
    p.classList.add('full-name');

    let h2 = document.createElement('h2');
 
    container.appendChild(div);
    div.appendChild(span);
    div.appendChild(p);
    span.appendChild(h2);

    //atribuindo cor randômica para a bolinha
    let color = "#" + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    span.style.background= color

    //pegando o nome digitado e inserindo no p
    let name = document.querySelector('input').value;
    p.textContent = name
    
    //capturando a primeira letra
    let listaNomes = name.split(' ', 2);

    listaNomes.length == 2 ? h2.textContent= listaNomes[0].charAt() + listaNomes[1].charAt() : h2.textContent= listaNomes[0].charAt()
}

document.addEventListener("keypress", function(event)
{
    if(event.key === "Enter") {
        let btn = document.querySelector('button');
        btn.click();
    }
})