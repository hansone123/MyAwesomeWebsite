// user.controller.js
import userModule from '../modules/user.module';

/* User  POST 新增 */
const userPost = (req, res) => {
  // 取得新增參數
  const insertValues = req.body;
  userModule.createUser(insertValues).then((result) => {
    res.send(result); // 成功回傳result結果
  }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
};
export default {
  userPost
};