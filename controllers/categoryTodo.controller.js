const CategoryTodo =  require('../models/categoryTodo.model');
const mongoose = require('mongoose');

module.exports={
//get categoryTodoList
    categoryTodoList:(req, res, next)=>{
        const idAuthor = req.params.idAuthor;
        CategoryTodo.find({author: idAuthor})
        .then((categories)=>{res.status(200).json({status:200, message:categories})})
        .catch((err)=>{res.status(400).json({message: err.message})})
    },

//get categoryTodo
//retourne une categorie afin qu'on puisse la modifier ou la supprimer
    getCategoryTodo:(req, res, next)=>{
        const idCatg = req.params.id;
        CategoryTodo.findOne({_id: idCatg})
        .then((cat)=>{res.status(200).json({status:200, message:cat})})
        .catch((err)=>{res.status(400).json(err.message)}) 
    },

//create categoryTodo
    addCategoryTodo: async(req, res, next)=>{
        
        try{
            const categoryExist = await CategoryTodo.exists({categoryName: req.body.categoryName})
        if(categoryExist){
            return res.status(400).json({status:400, message: 'Impossible de créer une categorie qui existe déjà!'})
        }
        const categoryAdd = new CategoryTodo({
            ...req.body, 
            author: req.body.author,
            });
        categoryAdd.save()
        .then((catg)=>{res.status(201).json({status: 201, message:`la categorie a été crée ${catg.categoryName}` })})
        .catch((err)=>{res.status(400).json({message: err.message})})
    }
    catch(err){res.status(500).json({message: err.message})};
},

//update categoryTodo
//ps on ne pourra pas supprimer les catégories car rattachées à une tache, cependant on peut modifier une categorie vu que l'id de la ctg est conservé
    updateCategoryTodo:(req, res, next)=>{
        const idCatg = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(idCatg)) return res.status(404).send(`nous n'avont pas trouvé la tache N°: ${idCatg}`);
        
        CategoryTodo.updateOne({_id: idCatg},{...req.body, _id: idCatg}, (err, catg)=>{
           
            if(err){
                return res.status(500).json({message: err.message})
            }
            return res.status(200).json({status:200, message: `la tache a été modifiée!`})
        })

    },



}