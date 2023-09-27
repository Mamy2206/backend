const Formation = require("../model/Formation");

module.exports = {
    getAll: async (req, res) =>{
        Formation.findAll().then((formation) => {
            res.json({data: formation})
        }).catch((err) => {
          console.log('Erreur', err)  
        });
    },

    getById: async (req, res) =>{
        Formation.findByPk(req.params.id).then((formation) => {
            res.json({data: formation})
        }).catch((err) => {
            console.log('erreur', err);
        });
    },

    update: async (req, res) =>{
        Formation.update(req.body, {
            where: {
                id_formation: req.params.id
            }
        }).then((_) => {
            res.json({mes: 'succes'})
        }).catch((err) => {
            console.log(err)
        });
    },

    insert: async (req, res) =>{
        const formationData= req.body
       
        Formation.create(formationData).then((formation) => {
           res.json({data: formation}) 
        }).catch((err) => {
            console.log(err)
        });
    },

    delete: async (req, res) =>{
        Formation.findByPk(req.params.id).then((formation) => {
            const formationDelete = formation
            formation.destroy({
               where: {id_formation: formation.id_formation}
            }).then((_) => {
               const messege = `${formationDelete.nom} est supprimer`
               res.json({data: formationDelete, message: messege})
            }).catch((err) => {
               res.json({erreur: err})
               console.log(err);
            });
         });
    },

}