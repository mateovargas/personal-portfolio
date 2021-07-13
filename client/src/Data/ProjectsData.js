import PokedexImage from '../Images/Pokedex.png';
import Xeno from '../Images/game.png';
import SPAM from '../Images/SPAM-Store.png';
import WorkLifeBalance from '../Images/worklife.png';
import FriendFinder from '../Images/friendfinder.png';
import Burger from '../Images/burger.png';

const Projects = {
    title: 'Projects',
    projects: [
        {
            id: 1,
            title: 'Pokédex',
            image: PokedexImage,
            technology: 'ReactJS',
            description: 'A front-end application that allows you to search for a Pokemon using the PokeAPI.',
            link: 'https://react-pokedex-mv.herokuapp.com/',
            github: 'https://github.com/mateovargas/pokedex'
        },
        {
            id: 2,
            title: 'Xenoplague',
            image: Xeno,
            technology: 'Unity2D and C#',
            description: "A game that simulates the spread of a disease, created and presented as Mateo's Masters thesis.",
            link: 'https://mateovargas.itch.io/discrete-sir-games-for-understanding-epidemics',
            github: 'https://github.com/mateovargas/dissertation'
        },
        {
            id: 3,
            title: 'SPAM-Store',
            image: SPAM,
            technology: 'MongoDB, ReactJS, ExpressJS, NodeJS',
            description: 'This is a React boilerplate single page responsive portfolio app for store fronts.',
            link: 'https://www.npmjs.com/package/spam-store',
            github: 'https://github.com/React-BP/SPAM-store'
        },
        {
            id: 4,
            title: 'WorkLifeBalance',
            image: WorkLifeBalance,
            technology: 'MongoDB, ReactJS, ExpressJS, NodeJS',
            description: 'Application that allows users to login and keep track of their hours spent.',
            link: 'https://frozen-sierra-80656.herokuapp.com/',
            github: 'https://github.com/mateovargas/workLife'
        },
        {
            id: 5,
            title: 'FriendFinder',
            image: FriendFinder,
            technology: 'ReactJS, ExpressJS, NodeJS',
            description: 'Application that allows users pair themselves with their most likely match.',
            link: 'https://floating-dawn-36930.herokuapp.com/',
            github: 'https://github.com/mateovargas/friends-app'
        },
        {
            id: 6,
            title: "Bob's Burger",
            image: Burger,
            technology: 'ExpressJS, HandlebarsJS, NodeJS',
            description: "Application that lets you feed Bob's friend and create new ones.",
            link: 'https://aqueous-hamlet-72599.herokuapp.com/',
            github: 'https://github.com/mateovargas/burger'
        }
    ]
}

export default Projects;