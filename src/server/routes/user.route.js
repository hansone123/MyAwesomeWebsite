import express from 'express';
import validate from 'express-validation';
import userCtrl from '../controllers/user.controller';
import paraValidation from '../../config/user-para-validation';

const router = express.Router();

router.route('/')
    .get(userCtrl.userGet) /** 取得 User 所有值組 */
    .post(validate(paraValidation.createUser), userCtrl.userPost); /** 新增 User 值組 */
/** 修改 User 值組 */
router.route('/:user_id')
    .put(userCtrl.userPut)
    .delete (userCtrl.userDelete); /** 刪除 User 值組 */

export default router
