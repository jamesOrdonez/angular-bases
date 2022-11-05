//importar la conexión a la DB 
import db from "../database/db.js";

//importar sequlize 
import { DataTypes } from "sequelize";

const BlogModel = db.define('blogs',{
    title: { type: DataTypes.STRING },
    content : { type: DataTypes.STRING }
})

export default BlogModel