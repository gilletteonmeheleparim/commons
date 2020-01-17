import { showChannels } from '../config'

const menu = [
    {
        title: 'Publish',
        link: '/publish'
    },
    {
        title: 'Explore datasets',
        link: '/ExploreDatasetsMap'
    },
    {
        title: 'Model',
        link: '/model'
    },
    {
        title: 'History',
        link: '/history'
    },
    {
        title: 'Faucet',
        link: '/faucet'
    },
    {
        title: 'About',
        link: '/about'
    }
]

showChannels &&
    menu.unshift({
        title: 'Channels',
        link: '/channels'
    })

export default menu
