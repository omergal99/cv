const initialState = {
  tagsIcon: [{ name: 'Heroku', icon: '' }, 'MongoDB', 'Node.js', 'React', 'Vue.js', '', '', '', '',],
  projects: [
    {
      _id: '101',
      name: 'Parties App',
      description: 'Watch for interesting parties taking place soon. Order tickets and create your party!\nGCP link to my Domain using compute engine.',
      desktopImg: 'assets/img/apps/parties/desktop.png',
      mobileImg: 'assets/img/apps/parties/mobile.png',
      links: { github: '', website: 'https://parties-app.herokuapp.com', gcp: 'https://beetroot.cyou/' },
      tags: ['Material-UI', 'Material-Table', 'React', 'Node.js', 'MongoDB', 'Mongoose', 'Google Map', 'GCP']
    },
    {
      _id: '102',
      name: 'Family Chat',
      description: 'Chat to our dog, connected to server with database.\nMessage when Messi came out, forbidden & allowed foods for dogs.',
      desktopImg: 'assets/img/apps/pet treat/desktop.png',
      mobileImg: 'assets/img/apps/pet treat/mobile.png',
      links: { github: 'https://github.com/omergal99/pet-treat', website: 'https://gal-family.herokuapp.com/' },
      tags: ['React', 'Node.js', 'MongoDB', 'Heroku', 'Web Sockets', 'Redux', 'Hooks', 'PWA']
    },
    {
      _id: '103',
      name: 'Music Player',
      description: 'Music player, with song upload option, keyboard control, next or previous song, click selection, song timing bar.',
      desktopImg: 'assets/img/apps/music world/desktop.png',
      mobileImg: 'assets/img/apps/music world/mobile.png',
      links: { github: 'https://github.com/omergal99/react-music-world', website: 'https://omergal99.github.io/react-music-world/#/' },
      tags: ['React', 'gh-pages', 'Redux', 'Music']
    },
    {
      _id: '104',
      name: 'Movies & Reviews',
      description: 'Final course project, connected to server with database.\nRated reviews & movies, Let\'s become opinion leaders.',
      desktopImg: 'assets/img/apps/movies and reviews/desktop.png',
      mobileImg: 'assets/img/apps/movies and reviews/mobile.png',
      links: { github: 'https://github.com/omergal99/frontend-proj-movies', website: 'https://moviky.herokuapp.com/#/' },
      tags: ['Vue.js', 'Node.js', 'MongoDB', 'Heroku', 'Responsive', 'Web Sockets', 'PWA']
    },
    {
      _id: '105',
      name: 'Pixel Mac',
      description: 'Pixel prefect for macbook.\nOption to enlarge, delete, add windows & dragging them.',
      desktopImg: 'assets/img/apps/pixel mac/desktop.png',
      mobileImg: '',
      links: { github: 'https://github.com/omergal99/pixel-mac', website: 'https://omergal99.github.io/pixel-mac/' },
      tags: ['React', 'gh-pages', 'Redux', 'Pixel Perfect']
    },
    {
      _id: '106',
      name: 'Device Manager',
      description: 'Manage your devices in the world in one place!\nAnd control their connections.',
      desktopImg: 'assets/img/apps/device manager/desktop.png',
      mobileImg: 'assets/img/apps/device manager/mobile.png',
      links: { github: 'https://github.com/omergal99/device-manager', website: 'https://omergal99.github.io/device-manager' },
      tags: ['React', 'gh-pages', 'Redux', 'Responsive', 'Dragging', 'SVG', 'Maps']
    },
    {
      _id: '107',
      name: 'Color Recorder',
      description: 'Converts sound to words.\nColor recognition, paint screen according color detected.',
      desktopImg: 'assets/img/apps/voice recorder/desktop.png',
      mobileImg: 'assets/img/apps/voice recorder/mobile.png',
      links: { github: 'https://github.com/omergal99/snacks-drafts', website: 'https://omergal99.github.io/snacks-drafts/#/VoiceRecorder' },
      tags: ['React', 'gh-pages', 'Hooks']
    },
    {
      _id: '108',
      name: 'Little Games',
      description: 'Lots of little games.\nMinesweeper, chess, Pacman, bookstore, and more.',
      desktopImg: 'assets/img/apps/protfolio/desktop.png',
      mobileImg: 'assets/img/apps/protfolio/mobile.png',
      links: { github: 'https://github.com/omergal99/little-games', website: 'https://omergal99.github.io/little-games/' },
      tags: ['Vanilla.js', 'CRUDL', 'Bootstrap', 'font-awesome', 'jQuery']
    },
    {
      _id: '109',
      name: 'Bitcoin React/Angular',
      description: 'My first apps at React & Angular (various projects).\nCRUDL of user, money transfer, graphs, responsive.',
      desktopImg: 'assets/img/apps/bitcoin/desktop.png',
      mobileImg: 'assets/img/apps/bitcoin/mobile.png',
      links: { github: 'https://github.com/omergal99/react-bitCoin', website: 'https://omergal99.github.io/react-bitCoin/#/' },
      tags: ['React', 'Angular 7', 'gh-pages', 'MobX', 'Angular CLI']
    },
    {
      _id: '110',
      name: 'Instegram & Mail',
      description: 'Working with Vue.js.\nLike Instagram make post with photos, text, music.',
      desktopImg: 'assets/img/apps/mail and instegram/desktop.png',
      mobileImg: 'assets/img/apps/mail and instegram/mobile.png',
      links: { github: 'https://github.com/omergal99/Mail-Instegram', website: 'https://omergal99.github.io/Mail-Instegram/#/keep-app' },
      tags: ['Vue.js', 'event-bus', 'Pseudo-elements', 'CRUDL', 'Bootstrap', 'jQuery']
    },
    {
      _id: '111',
      name: 'Meme Generator',
      description: 'Working with canvas.\nMoving the sentences, uploading a photo, download the memes.',
      desktopImg: 'assets/img/apps/meme generator/desktop.png',
      mobileImg: 'assets/img/apps/meme generator/mobile.png',
      links: { github: 'https://github.com/omergal99/Meme-generator', website: 'https://omergal99.github.io/Meme-generator/' },
      tags: ['Vanilla.js', 'Canvas', 'Bootstrap', 'jQuery']
    },
    {
      _id: '112',
      name: 'Friends Achievements',
      description: 'Amusing achievement app for my friends.\nWe can add or drop points to each other.',
      desktopImg: 'assets/img/apps/friends/desktop.png',
      mobileImg: 'assets/img/apps/friends/mobile.png',
      links: { github: 'https://github.com/omergal99/friends-achievement-hooks', website: 'https://omergal99.github.io/friends-achievement-hooks/' },
      tags: ['React', 'gh-pages', 'Redux', 'Hooks']
    },
    {
      _id: '113',
      name: 'Chat Redux/MobX',
      description: 'Chat with Redux & MobX (various projects).\nWith server, work through sockets, receive messages, typing.',
      desktopImg: 'assets/img/apps/little chat/desktop.png',
      mobileImg: 'assets/img/apps/little chat/mobile.png',
      links: { github: 'https://github.com/omergal99/react-chat-redux', website: 'https://little-chat.herokuapp.com' },
      tags: ['React', 'Node.js', 'Heroku', 'Web Sockets', 'Redux', 'MobX']

    },
    {
      _id: '114',
      name: 'Snake',
      description: 'My first web game.\nI\'ve added my own extensions, music, visibility, record keeping.',
      desktopImg: 'assets/img/apps/snake/desktop.png',
      mobileImg: 'assets/img/apps/snake/mobile.png',
      links: { github: 'https://glitch.com/~snake5', website: 'https://snake5.glitch.me/' },
      tags: ['My First Web Game', 'Vanilla.js', 'Canvas', 'glitch']
    },
    // {
    //   _id: '115',
    //   name: 'name',
    //   description: 'description',
    //   desktopImg: '',
    //   mobileImg: '',
    //   links: { github: '', website: '' },
    //   tags: []
    // },
    // {
    //   _id: '116',
    //   name: 'name',
    //   description: 'description',
    //   desktopImg: '',
    //   mobileImg: '',
    //   links: { github: '', website: '' },
    //   tags: []
    // },
    // {
    //   _id: '117',
    //   name: 'name',
    //   description: 'description',
    //   desktopImg: '',
    //   mobileImg: '',
    //   links: { github: '', website: '' },
    //   tags: []
    // },
  ]
}

function getProjects() {
  // setTimeout(() => {
  //   return Promise.resolve(initialState)
  // }, 2000)
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(initialState);
  //   }, 5000)
  // })
  // return new Promise((resolve) => {
  //     resolve(initialState);
  // })
  return Promise.resolve(initialState)
}



export default {
  getProjects
}