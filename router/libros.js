import express from 'express'
import controller from '../controller/libros.js'

const router = express.Router()


/* GET Libros */
router.get('/:id?', controller.getLibros)


/* POST Libros */
router.post('/', controller.postLibro)


/* PUT Libros */
router.put('/:id', controller.putLibro)


/* DELETE Libros */
router.delete('/:id', controller.deleteLibro)

export default router