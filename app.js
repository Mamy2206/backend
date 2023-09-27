const express = require('express')
const app = express()
const port = 8000 || process.env.PORT
const sequelize = require('./database/connection')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

// ROUTES
app.use('/api/users', require('./routes/user.route'))
app.use('/api/formations', require('./routes/formation.route'))
app.use('/api/inscriptions', require('./routes/inscription.route'))
app.use('/api/formateurs', require('./routes/formateur.route'))






app.listen(port, () => console.log(`Example app listening on port ${port}!`))

sequelize.authenticate().then((_) => {
    console.log("Connexion etablie!!!");
}).catch((err) => {
    console.log(err);
});