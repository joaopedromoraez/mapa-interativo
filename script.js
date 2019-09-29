let estados = [
    { capital: 'Acre', estado: 'AC' },
    { capital: 'Alagoas', estado: 'AL' },
    { capital: 'Amapá', estado: 'AP' },
    { capital: 'Amazonas', estado: 'AM' },
    { capital: 'Bahia', estado: 'BA' },
    { capital: 'Ceará', estado: 'CE' },
    { capital: 'Distrito Federal', estado: 'DF' },
    { capital: 'Espírito Santo', estado: 'ES' },
    { capital: 'Goiás', estado: 'GO' },
    { capital: 'Maranhão', estado: 'MA' },
    { capital: 'Mato Grosso', estado: 'MT' },
    { capital: 'Mato Grosso do Sul', estado: 'MS' },
    { capital: 'Minas Gerais', estado: 'MG' },
    { capital: 'Pará', estado: 'PA' },
    { capital: 'Paraíba', estado: 'PB' },
    { capital: 'Paraná', estado: 'PR' },
    { capital: 'Pernambuco', estado: 'PE' },
    { capital: 'Piauí', estado: 'PI' },
    { capital: 'Rio de Janeiro', estado: 'RJ' },
    { capital: 'Rio Grande do Norte', estado: 'RN' },
    { capital: 'Rio Grande do Sul', estado: 'RS' },
    { capital: 'Rondônia', estado: 'RO' },
    { capital: 'Roraima', estado: 'RR' },
    { capital: 'Santa Catarina', estado: 'SC' },
    { capital: 'São Paulo', estado: 'SP' },
    { capital: 'Sergipe', estado: 'SE' },
    { capital: 'Tocantins', estado: 'TO' }
];



for (let x in estados) {
    document.getElementById(estados[x].estado).addEventListener("click", () => {
        console.table(estados[x]);
        iniciarModal('modal-principal');
        adicionaInfo(estados[x].estado,estados[x].capital); 
    });
    document.getElementById(estados[x].estado).addEventListener("mouseleave", () => {
        document.getElementById(estados[x].estado).style.fill = '#000000';
    });
    document.getElementById(estados[x].estado).addEventListener("mouseenter", () => {
        document.getElementById(estados[x].estado).style.fill = '#fcba03';
    });
}



function iniciarModal(modalID){
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar');
    modal.addEventListener('click',(e)=>{
        if(e.target.id == modalID ||e.target.className == 'fechar'){
            modal.classList.remove('mostrar');
        }
    });
}

function adicionaInfo(estado,capital){
    document.getElementById('estado').innerHTML = estado;
    document.getElementById('capital').innerHTML = capital;
}

