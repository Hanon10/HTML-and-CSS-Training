const footballTeam = {
    team: 'Barcelona',
    year: 2026,
    headCoach: 'Hansi Flick',
    player: [
        {
            name: 'Joan Garcia',
            position: 'goalkeeper',
            isCapitain: false
        },
        {
            name: 'W.Szczeny',
            position: 'goalkeeper',
            isCapitain: false
        },
        {
            name: 'Jules Kounde',
            position: 'defender',
            isCapitain: false
        },
        {
            name: 'Joao Cancelo',
            position: 'defender',
            isCapitain: false
        },
        {
            name: 'Alex Balde',
            position: 'defender',
            isCapitain: false
        },
        {
            name: 'Pau Cubarci',
            position: 'defender',
            isCapitain: false
        },
        {
            name: 'Eric Garcia',
            position: 'defender',
            isCapitain: false
        },
        {
            name: 'Gerard Martin',
            position: 'defender',
            isCapitain: false
        },
        {
            name: 'Pedri',
            position: 'midfielder',
            isCapitain: false
        },
        {
            name: 'F. De Jong',
            position: 'midfielder',
            isCapitain: true
        },
        {
            name: 'Dani Olmo',
            position: 'midfielder',
            isCapitain: false
        },
        {
            name: 'Fermin Lopez',
            position: 'midfielder',
            isCapitain: false
        },
        {
            name: 'Gavi',
            position: 'midfielder',
            isCapitain: false
        },
        {
            name: 'Marc Bernal',
            position: 'midfielder',
            isCapitain: false
        },
        {
            name: 'Raphinha',
            position: 'forward',
            isCapitain: false
        },
        {
            name: 'Lamine Yamal',
            position: 'forward',
            isCapitain: false
        },
        {
            name: 'R. Lewandowski',
            position: 'forward',
            isCapitain: false
        },
        {
            name: 'M.Rashford',
            position: 'forward',
            isCapitain: false
        },
        {
            name: 'Ferran Torres',
            position: 'forward',
            isCapitain: false
        },
    ]
}

const team = document.getElementById('team');
const year = document.getElementById('year')
const headCoach = document.getElementById('head-coach')
const cards = document.getElementById('player-cards')
const select = document.querySelector('select')

team.innerText = footballTeam.team;
year.innerText = footballTeam.year;
headCoach.innerText = footballTeam.headCoach;

function playerCards(playerCatagory){
    const players = 
        playerCatagory === 'all' 
            ? footballTeam.player 
            : footballTeam.player.filter(({position}) => {
                return position === playerCatagory
            })
    // console.log(players)
    return players.map( ({name,position,isCapitain}) => {
        return `<div class="player-card">
                    <h2>${isCapitain ? `(Capitain) ${name}` : name}</h2>
                    <p>Position: ${position}</p>
                </div>`
    });
}

cards.innerHTML = playerCards('all')

select.addEventListener('change', function(){
    cards.innerHTML = playerCards(this.value)
})