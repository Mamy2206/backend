const Inscription = require("../model/Inscription");

module.exports = {
    getAll: async (req, res) =>{
        Inscription.findAll().then((inscription) => {
            res.json({data: inscription})
        }).catch((err) => {
          console.log('Erreur', err)  
        });
    },

    getById: async (req, res) =>{
        Inscription.findByPk(req.params.id).then((inscription) => {
            res.json({data: inscription})
        }).catch((err) => {
            console.log('erreur', err);
        });
    },

    update: async (req, res) =>{
        Inscription.update(req.body, {
            where: {
                id_inscription: req.params.id
            }
        }).then((_) => {
            res.json({mes: 'succes'})
        }).catch((err) => {
            console.log(err)
        });
    },

    insert: async (req, res) =>{
        const inscriptionData= req.body
       
        Inscription.create(inscriptionData).then((inscription) => {
           res.json({data: inscription}) 
        }).catch((err) => {
            console.log(err)
        });
    },

    delete: async (req, res) =>{
        Inscription.findByPk(req.params.id).then((inscription) => {
            const inscriptionDelete = inscription
            inscription.destroy({
               where: {id_inscription: inscription.id_inscription}
            }).then((_) => {
               const messege = `${inscriptionDelete.id_inscription} est supprimer`
               res.json({data: inscriptionDelete, message: messege})
            }).catch((err) => {
               res.json({erreur: err})
               console.log(err);
            });
         });
    },

}