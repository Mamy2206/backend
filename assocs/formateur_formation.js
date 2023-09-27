const Formateur = require('../model/Formateur')
const Formation = require('../model/Formation')


// association

Formateur.hasMany(Formation, { as:'formation', foreignKey: 'formateurId' })
Formation.belongsTo(Formateur, { as:'formateur', foreignKey: 'formateurId' })