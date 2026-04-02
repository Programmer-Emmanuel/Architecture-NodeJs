const User = require("../model/user");

exports.listUser = async (req, res) => {
    try{
        const user = await User.findAll()
        res.json({
            success : true,
            data : user,
            message : "Liste des users"
        })
    }
    catch(error){
        res.status(500).json({
            success : false,
            message : "Erreur lors de l’affichage de la liste des users",
            erreur : error.message
        })
    }
}

