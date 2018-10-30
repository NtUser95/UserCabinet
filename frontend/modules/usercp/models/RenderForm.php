<?php

namespace app\modules\usercp\models;

use yii\base\Model;

class RenderForm extends Model
{
    public $skin;
    public $cape;
    
    public function rules()
    {
        return [
            [
                'skin', 
                'image', 
                'skipOnEmpty' => true, 
                'extensions' => 'png, jpg', 
                'minWidth' => 10, 
                'maxWidth' => 500, 
                'minHeight' => 10, 
                'maxHeight' => 500
            ],
            [
                'cape', 
                'image', 
                'skipOnEmpty' => true, 
                'extensions' => 'png, jpg', 
                'minWidth' => 10, 
                'maxWidth' => 500, 
                'minHeight' => 10, 
                'maxHeight' => 500
            ],
        ];
    }
    
    public function loadRenderData()
    {
        $username = strtolower(\Yii::$app->user->identity->username);
        if($this->skin) {
            $filePath = \Yii::getAlias('@app') . '/web' . \Yii::getAlias ('@skin_web_path') . "/{$username}.{$this->skin->extension}";
            $this->skin->saveAs($filePath);
        }
        if($this->cape) {
            $filePath = \Yii::getAlias('@app') . '/web' . \Yii::getAlias ('@cape_web_path') . "/{$username}.{$this->cape->extension}";
            $this->cape->saveAs($filePath);
        }
    }
}