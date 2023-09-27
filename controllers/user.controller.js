const User = require("../model/User");

module.exports = {
    getAll: async (req, res) =>{
        User.findAll().then((user) => {
            res.json({data: user})
        }).catch((err) => {
          console.log('Erreur', err)  
        });
    },

    getById: async (req, res) =>{
        User.findByPk(req.params.id).then((user) => {
            res.json({data: user})
        }).catch((err) => {
            console.log('erreur', err);
        });
    },

    update: async (req, res) =>{
        User.update(req.body, {
            where: {
                id_user: req.params.id
            }
        }).then((_) => {
            res.json({mes: 'succes'})
        }).catch((err) => {
            console.log(err)
        });
    },

    insert: async (req, res) =>{
        const userData= req.body
       
        User.create(userData).then((user) => {
           res.json({data: user}) 
        }).catch((err) => {
            res.json(err.message)
            console.log(err.message)
        });
    },

    delete: async (req, res) =>{
        User.findByPk(req.params.id).then((user) => {
            const UserDelete = user
            User.destroy({
               where: {id_user: user.id}
            }).then((_) => {
               const messege = `${UserDelete.nom} est supprimer`
               res.json({data: UserDelete, message: messege})
            }).catch((err) => {
               res.json({erreur: err})
               console.log(err);
            });
         });
    },

}