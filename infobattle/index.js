const body = document.querySelector('body');
const playerContainer = document.getElementById('players-container');
for(var i=0;i<60;i++) {
    let child = document.createElement('div');
    child.classList.add('profile-container');
    child.innerHTML = '<img class="player-profile" src="https://suap.ifrn.edu.br/media/alunos/334599.0ATj3hbm6_va.jpg">'
    playerContainer.appendChild(child);
}

function start() {
    return 0;
}