const initialState = {
  timePoints: [
    {
      _id: 4001,
      title: 'תיכון',
      subtitle: '10 יחידות\nמחשבים',
      description: '5 יחידות #C, ו5 יחידות פרויקט לסינון רעשים מתמונה בMATLAB במכון HIT בחולון מטעם מכון ויצמן.',
      icons: ['url','url'],
      blendMode: 'luminosity'
    },
    {
      _id: 4002,
      title: 'צבא',
      subtitle: 'מנהל אתר\nהמילואים',
      description: 'כ-3 שנים בתפקיד, בפיקודי צוות של 4 חיילים מעולים, העלאת גרסאות, טיפול בתקלות סנכרון מתקדמות, בדיקות שפיות, QA, ניטורים באמצעות דוחות וXMLים, מעקב אינפורמטיקה, ועוד.',
      icons: ['url','url'],
      blendMode: 'normal'
    },
    {
      _id: 4003,
      title: 'אזרחות',
      subtitle: 'קורס תכנות\nFullstack Developer',
      description: 'סיימתי קורס תכנות מקיף, בcoding academy. הכשרת Fullstack Developer לימוד של היסודות, ובהמשך טכנולוגיות מתקדמות JavaScript Vue.js Node.js.',
      icons: ['url','url'],
      blendMode: 'hard-light'
    },
  ]
}

function getTimePoints () {
  return Promise.resolve(initialState)
}

export default {
  getTimePoints,
}