//importamos el modelo
import BlogModel from "../models/BlogModels.js";

//Métodos para el crud//

//mostrar todos los blogs 
    export const getAllBlogs = async (req,res) => {
    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json({message: error.message} )
    }
    }

//mostrar un blog en especifico
    export const getBlog = async (req,res) => {
        try {
            const blog = await BlogModel.findAll({
                where: {id: req.params.id}
            })
            res.json(blog[0])
        } catch (error) {
            res.json({message: error.message} )
        }
    }

//crear un blog
    export const createBlog = async (req,res) => {
        try {
            await BlogModel.create(req.body)
            res.json ({
                "message":"Blog creado exitosamente"
            })
        } catch (error) {
            res.json({message: error.message} )
        }
    }

//Actualizar un blog 
    export const updateBlog = async (req,res) => {
        try {
            await BlogModel.update(req.body, {
                where: {id:req.params.id }
            })
            res.json ({
                "message":"Blog actualizado exitosamente"
            })
        } catch (error) {
            res.json({message: error.message} )
        }
    }

//eliminar un blog 
    export const deleteBlog = async (req,res) => {
        try {
            await BlogModel.destroy({
                where: { id  :req.params.id }
            }) 
            res.json ({
                "message":"Blog eliminado exitosamente"
            })
        } catch (error) {
            res.json({message: error.message} )
        }
    }