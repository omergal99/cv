const initialState = {
  timePoints: [
    {
      _id: 4001,
      title: 'תיכון',
      subtitle: '10 יחידות\nמחשבים',
      description: '5 יחידות #C, ו5 יחידות פרויקט לסינון רעשים מתמונה בMATLAB במכון HIT בחולון מטעם מכון ויצמן.',
      icons: ['url', 'url'],
      blendMode: 'luminosity'
    },
    {
      _id: 4002,
      title: 'צבא',
      subtitle: 'מנהל אתר\nהמילואים',
      description: 'סרן בתפקיד 3 שנים, בפיקודי צוות של 4 חיילים.\nהעלאת גרסאות, טיפול בתקלות, ניטורים, בקרה, אינפורמטיקה, XMLים, ועוד.',
      icons: ['url', 'url'],
      blendMode: 'normal'
    },
    {
      _id: 4003,
      title: 'אזרחות',
      subtitle: 'קורס תכנות\nFullstack Developer',
      description: 'קורס תכנות מקיף, מפתח Fullstack Developer.\nלימוד מהיסודות עד לטכנולוגיות מתקדמות.',
      icons: ['url', 'url'],
      blendMode: 'hard-light'
    },
  ],
  socialNetworks: [
    {
      _id: 5002,
      title: 'Stack Overflow',
      icon: 'assets/img/icons/StackOverflow.png',
      img: 'assets/img/profile/StackOverflow Profile.png',
      link: 'https://stackoverflow.com/users/10869929/omer',
    },
    {
      _id: 5003,
      title: 'LinkedIn',
      icon: 'assets/img/icons/LinkedIn.png',
      img: 'assets/img/profile/LinkedIn Profile.png',
      link: 'https://www.linkedin.com/in/omergal99/',
    },
    {
      _id: 5001,
      title: 'Github',
      icon: 'assets/img/icons/Github.png',
      img: 'assets/img/profile/Github Profile.png',
      link: 'https://github.com/omergal99',
    },
  ]
}

function getOmerInit() {
  return Promise.resolve(initialState)
}

export default {
  getOmerInit,
}