import express from 'express';
import validate from 'express-validation';
import articleCtrl from '../controllers/article.controller';
import paraValidation from '../../config/article-para-validation';

const router = express.Router();

router.route('/')
  .get(articleCtrl.articleGet)
  .post(validate(paraValidation.createArticle), articleCtrl.articlePost); /** 新增 Article 值組 */
router.route('/:article_id')
  .put(articleCtrl.articlePut)
  .delete(articleCtrl.articleDelete);

export default router;

