<?php

namespace app\modules\usercp\controllers;

use yii\web\Controller;
use \app\modules\usercp\models\RenderForm;
use \yii\web\UploadedFile;

/**
 * Default controller for the `usercp` module
 */
class DefaultController extends Controller
{
    /**
     * Renders the index view for the module
     * @return string
     */
    public function actionIndex()
    {
        return $this->render('index', ['render_form' => new RenderForm()]);
    }

    public function actionRender()
    {
        $model = new RenderForm();
        if (\Yii::$app->request->isPost) {
            $model->skin = UploadedFile::getInstance($model, 'skin');
            $model->cape = UploadedFile::getInstance($model, 'cape');
            if (($model->skin || $model->cape) && $model->validate()) {
                $model->loadRenderData();
            }
        }
    }
}
