<?php

namespace app\modules\usercp\controllers;

use yii\web\Controller;

class HistoryController extends Controller 
{
    public $layout = 'history.php';
    
    public function actionIndex()
    {
        return $this->render('index');
    }
}