const initialState = {
  timePoints: [
    {
      _id: 4001,
      title: 'תיכון',
      subtitle: '10 יחידות\nמחשבים',
      description: '5 יחידות #C, ו5 יחידות פרויקט לסינון רעשים מתמונה בMATLAB במכון HIT בחולון מטעם מכון ויצמן.',
      icons: ['url', 'url'],
      filter: 'sepia(1)',
      rotateDeg: 180,
      bcPosition: '-48px -93px'
    },
    {
      _id: 4002,
      title: 'צבא',
      subtitle: 'מנהל אתר\nהמילואים',
      description: 'קצין בדרגת סרן, ראש צוות ל4 חיילים.\n3 שנים בתפקיד עשיר ומאתגר.\nהעלאת גרסאות, ניהול המוצר, אתר מותאם, ניטורים, תכנון מוצר והגדרת תכולות, ייצוב האתר, בקרה, ועוד.',
      icons: ['url', 'url'],
      filter: 'none',
      rotateDeg: 300,
      bcPosition: '-19px 2px'
    },
    {
      _id: 4003,
      title: 'אזרחות',
      subtitle: 'Full-stack\nBootcamp',
      description: 'קורס תכנות אינטנסיבי, 4 חודשים.\nלמידה של הטכנולוגיות המתקדמות בעולם הWeb.',
      icons: ['url', 'url'],
      filter: 'sepia(1)',
      rotateDeg: 60,
      bcPosition: 'left'
    },
  ],
  socialNetworks: [
    {
      _id: 5003,
      title: 'LinkedIn',
      icon: 'assets/img/icons/LinkedIn.png',
      img: 'assets/img/profile/LinkedIn Profile.png',
      link: 'https://www.linkedin.com/in/omergal99/',
    },
    {
      _id: 5002,
      title: 'Stack Overflow',
      icon: 'assets/img/icons/StackOverflow.png',
      img: 'assets/img/profile/StackOverflow Profile.png',
      link: 'https://stackoverflow.com/users/10869929/omer',
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