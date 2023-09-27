const Formateur = require("../model/Formateur");
const Formation = require("../model/Formation");
require('../assocs/formateur_formation')


module.exports = {
    getAll: async (req, res) =>{
        Formateur.findAll().then((formateur) => {
            res.json({data: formateur})
        }).catch((err) => {
          console.log('Erreur', err)  
        });
    },

    getById: async (req, res) =>{
        Formateur.findByPk(req.params.id).then((formateur) => {
            res.json({data: formateur})
        }).catch((err) => {
            console.log('erreur', err);
        });
    },

    update: async (req, res) =>{
        Formateur.update(req.body, {
            where: {
                id_formateur: req.params.id
            }
        }).then((_) => {
            res.json({mes: 'succes'})
        }).catch((err) => {
            console.log(err)
        });
    },

    insert: async (req, res) =>{
        const formateurData= req.body
       
        Formateur.create(formateurData).then((formateur) => {
           res.json({data: formateur}) 
        }).catch((err) => {
            res.json(err.message)
            console.log(err.message)
        });
    },

    delete: async (req, res) =>{
        Formateur.findByPk(req.params.id).then((formateur) => {
            const formateurDelete = formateur
            Formateur.destroy({
               where: {id_formateur: formateur.id_formateur}
            }).then((_) => {
               const messege = `${formateurDelete.nom} est supprimer`
               res.json({data: formateurDelete, message: messege})
            }).catch((err) => {
               res.json({erreur: err})
               console.log(err);
            });
         });
    },

    getAllFormationParFormateur: async (req, res) =>{
        Formateur.findAll(
            {
                include: {
                    model: Formation,
                    as: 'formation'
                }
            }
        ).then((formateur) => {
            res.json({data: formateur})
        }).catch((err) => {
          console.log('Erreur', err)  
        });

    }

}