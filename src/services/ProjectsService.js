const initialState = {
  tagsIcon: [{ name: 'Heroku', icon: '' }, 'MongoDB', 'Node.js', 'React.js', 'Vue.js', '', '', '', '',],
  projects: [
    {
      _id: '101',
      name: 'Movies & Reviews',
      description: 'My final course project, connected to server with database.\nThe app has movie reviews, Rated reviews, Rated movies, featured status for opinion leaders.',
      desktopImg: 'assets/img/apps/movies and reviews/desktop.png',
      mobileImg: 'assets/img/apps/movies and reviews/mobile.png',
      links: {github: 'https://github.com/omergal99/frontend-proj-movies', website: 'https://moviky.herokuapp.com/#/'},
      tags: ['Vue.js', 'Node.js', 'MongoDB', 'Heroku', 'Responsive', 'Web Sockets', 'PWA']
    },
    {
      _id: '102',
      name: 'Family Chat',
      description: 'Chat to our dog, connected to server with database.\nMessage when Messi came out, forbidden & allowed foods page for dogs.\nSoon a vaccine book, gallery and more.',
      desktopImg: 'assets/img/apps/pet treat/desktop.png',
      mobileImg: 'assets/img/apps/pet treat/mobile.png',
      links: {github: 'https://github.com/omergal99/pet-treat', website: 'https://gal-family.herokuapp.com/'},
      tags: ['React.js', 'Node.js', 'MongoDB', 'Heroku', 'Web Sockets', 'Redux', 'Hooks', 'PWA']
    },
    {
      _id: '103',
      name: 'Music Player',
      description: 'Music player, with song upload option, keyboard control, next or previous song, click selection, song timing bar.\nMusic rooms coming soon.',
      desktopImg: 'assets/img/apps/music world/desktop.png',
      mobileImg: 'assets/img/apps/music world/mobile.png',
      links: {github: 'https://github.com/omergal99/react-music-world', website: 'https://omergal99.github.io/react-music-world/#/'},
      tags: ['React.js', 'gh-pages', 'Redux', 'Music']
    },
    {
      _id: '104',
      name: 'Pixel Mac',
      description: 'Pixel prefect for macbook pro.\nOption to enlarge, delete windows, new windows and dragging them.',
      desktopImg: 'assets/img/apps/pixel mac/desktop.png',
      mobileImg: '',
      links: {github: 'https://github.com/omergal99/pixel-mac', website: 'https://omergal99.github.io/pixel-mac/'},
      tags: ['React.js', 'gh-pages', 'Redux', 'Pixel Perfect']
    },
    {
      _id: '105',
      name: 'Friends Achievements',
      description: 'An amusing achievement app for my friends.\nYou can add or drop points for a friend.',
      desktopImg: 'assets/img/apps/friends/desktop.png',
      mobileImg: 'assets/img/apps/friends/mobile.png',
      links: {github: 'https://github.com/omergal99/friends-achievement-hooks', website: 'https://omergal99.github.io/friends-achievement-hooks/'},
      tags: ['React.js', 'gh-pages', 'Redux', 'Hooks']
    },
    {
      _id: '106',
      name: 'Color Recorder',
      description: 'Converts sound to words.\nColor recognition with paint the screen according to the color detected.',
      desktopImg: 'assets/img/apps/voice recorder/desktop.png',
      mobileImg: 'assets/img/apps/voice recorder/mobile.png',
      links: {github: 'https://github.com/omergal99/snacks-drafts', website: 'https://omergal99.github.io/snacks-drafts/#/VoiceRecorder'},
      tags: ['React.js', 'gh-pages', 'Hooks']
    },
    {
      _id: '107',
      name: 'Little Games',
      description: 'Course project, lots of little games.\nMinesweeper, who\'s in the picture, chess, Pacman, bookstore, touch the numbers, and more.',
      desktopImg: 'assets/img/apps/protfolio/desktop.png',
      mobileImg: 'assets/img/apps/protfolio/mobile.png',
      links: {github: 'https://github.com/omergal99/my-protofilio', website: 'https://omergal99.github.io/my-protofilio/'},
      tags: ['Vanilla.js', 'CRUDL', 'Bootstrap', 'font-awesome', 'jQuery']
    },
    {
      _id: '108',
      name: 'Bitcoin React/Angular',
      description: 'My first apps at React & Angular (various projects).\nCRUDL of user-to-user money transfer, graphs, login, home page, navigation bar, responsive.',
      desktopImg: 'assets/img/apps/bitcoin/desktop.png',
      mobileImg: 'assets/img/apps/bitcoin/mobile.png',
      links: {github: 'https://github.com/omergal99/react-bitCoin', website: 'https://omergal99.github.io/react-bitCoin/#/'},
      tags: ['React.js', 'Angular 7', 'gh-pages', 'MobX', 'Angular CLI']
    },
    {
      _id: '109',
      name: 'Instegram & Mail',
      description: 'Course project, working with vue.js, using event bus.\nInstagram creation with photos, task delivery, photos, music, video, free text. and CRUDL them',
      desktopImg: 'assets/img/apps/mail and instegram/desktop.png',
      mobileImg: 'assets/img/apps/mail and instegram/mobile.png',
      links: {github: 'https://github.com/omergal99/Mail-Instegram', website: 'https://omergal99.github.io/Mail-Instegram/#/keep-app'},
      tags: ['Vue.js', 'event-bus', 'Pseudo-elements', 'CRUDL', 'Bootstrap', 'jQuery']
    },
    {
      _id: '110',
      name: 'Meme Generator',
      description: 'Course project, working with canvas, to create memes.\nMoving the sentences, uploading a photo, download the memes.',
      desktopImg: 'assets/img/apps/meme generator/desktop.png',
      mobileImg: 'assets/img/apps/meme generator/mobile.png',
      links: {github: 'https://github.com/omergal99/Meme-generator', website: 'https://omergal99.github.io/Meme-generator/'},
      tags: ['Vanilla.js', 'Canvas', 'Bootstrap', 'jQuery']
    },
    {
      _id: '111',
      name: 'Chat Redux/MobX',
      description: 'Chat with state management of Redux & MobX (various projects).\nWith a server, work through sockets, receive messages, typing by users.',
      desktopImg: 'assets/img/apps/little chat/desktop.png',
      mobileImg: 'assets/img/apps/little chat/mobile.png',
      links: {github: 'https://github.com/omergal99/react-chat-redux', website: 'https://little-chat.herokuapp.com'},
      tags: ['React.js', 'Node.js', 'Heroku', 'Web Sockets', 'Redux', 'MobX']

    },
    {
      _id: '112',
      name: 'Snake',
      description: 'My first web game, after learning java script myself.\nWith the help of a YouTube video https://youtu.be/9TcU2C1AACw.\nI\'ve added my own extensions, music, visibility, record keeping.',
      desktopImg: 'assets/img/apps/snake/desktop.png',
      mobileImg: 'assets/img/apps/snake/mobile.png',
      links: {github: 'https://glitch.com/~snake5', website: 'https://snake5.glitch.me/'},
      tags: ['My First Web Game', 'Vanilla.js', 'Canvas', 'glitch']
    },
  ]
}

function getProjects() {
  // setTimeout(() => {
  //   return Promise.resolve(initialState)
  // }, 2000)
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(initialState);
  //   }, 3000)
  // })
  // return new Promise((resolve) => {
  //     resolve(initialState);
  // })
  return Promise.resolve(initialState)
}



export default {
  getProjects
}