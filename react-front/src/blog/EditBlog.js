import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URI = 'http://localhost:8000/blogs/'

const CompEditBlog = () => {
    const [title, setTitle ] = useState('')
    const [content, setContent ] = useState('')
    const navigate = useNavigate()

    const { id } = useParams()
    
    //procedimiento oara actualizar 
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            title: title,
            content: content
        })
        navigate('/')
    }
    useEffect( () => {
        getBlogById()
    },[])

    const getBlogById = async () => {
        const res = await axios.get(URI+id)
        setTitle (res.data.title)
        setContent (res.data.content)
    }

    //vista del procedimiento de actualizar
    return (
        <div>
            <h3>Editar blog</h3>
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Título</label>
                    <input
                        value={title}
                        onChange={ (e)=> setTitle(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                    </div>
                    <div className='mb-3'>
                    <label className='form-label'>Contenido</label>
                    <textarea
                        value={content}
                        onChange={ (e)=> setContent(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                    </div>
                    <button className='btn btn-primary' type='submit'>Editar</button>
            </form>
        </div>
    )
}   

export default CompEditBlog