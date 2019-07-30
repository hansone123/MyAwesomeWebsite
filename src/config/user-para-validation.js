import Joi from 'joi'
// POST /api/user
export default {
    createUser: {
        body: {
            user_id: Joi.string().regex(/[a-zA-Z0-9]{6,20}$/).required(), // 最小長度6最大30，只允許英文大小寫和數字
            user_name: Joi.string().required(), // 字串＋必填
            user_mail: Joi.string().email().trim().required(), // 限定email格式並移除多餘空白
            user_password: Joi.string().regex(/[a-zA-Z0-9]{6,20}$/).required() // 最小長度6最大30，只允許英文大小寫和數字
        }
    }
}
