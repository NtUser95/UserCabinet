<?php

namespace app\modules\usercp;

/**
 * usercp module definition class
 */
class Module extends \yii\base\Module
{
    /**
     * {@inheritdoc}
     */
    public $controllerNamespace = 'app\modules\usercp\controllers';

    /**
     * {@inheritdoc}
     */
    public function init()
    {
        parent::init();
        
        $config = include(__DIR__ . '/config/main.php');
        foreach($config['skin_render'] as $key => $value) {
            \Yii::setAlias("@{$key}", $value);
        }
    }
}
