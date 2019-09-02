const initialState = {
  timePoints: [
    {
      _id: 4001,
      title: 'תיכון',
      subtitle: '10\nיחידות מחשבים',
      description: '5 יחידות #C, ו5 יחידות פרויקט לסינון רעשים מתמונה בMATLAB במכון HIT בחולון מטעם מכון ויצמן',
      icons: ['url','url'],
    },
    {
      _id: 4002,
      title: 'צבא',
      subtitle: 'מנהל\nאתר המילואים',
      description: 'description',
      icons: ['url','url'],
    },
    {
      _id: 4003,
      title: 'אזרחות',
      subtitle: 'בוטקאמפ תכנות\nאינטנסיבי',
      description: 'description',
      icons: ['url','url'],
    },
  ]
}

function getTimePoints () {
  return Promise.resolve(initialState)
}

export default {
  getTimePoints,
}