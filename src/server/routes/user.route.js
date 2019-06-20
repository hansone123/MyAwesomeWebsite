import express from 'express'
import userCtrl from '../controllers/user.controller'

const router = express.Router()

router.route('/').post(userCtrl.userPost)

export default router