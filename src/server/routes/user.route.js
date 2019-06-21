import express from 'express'
import userCtrl from '../controllers/user.controller'

const router = express.Router()

router.route('/').post(userCtrl.userPost)
    .get(userCtrl.userGet) /** 取得 User 所有值組 */
    .post(userCtrl.userPost); /** 新增 User 值組 */
/** 修改 User 值組 */
router.route('/:user_id')
    .put(userCtrl.userPut)
    .delete (userCtrl.userDelete); /** 刪除 User 值組 */

export default router
