<?php

use yii\helpers\Html;
use yii\grid\GridView;
use yii\widgets\Pjax;
use yii\grid\ActionColumn;
/* @var $this yii\web\View */
/* @var $searchModel common\models\UserSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Users';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="user-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <?php Pjax::begin(); ?>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= \Yii::$app->user->can('createUser') ? Html::a('Create User', ['create'], ['class' => 'btn btn-success']) : "" ?>
    </p>

    <?= GridView::widget([
	'columns' => [
    // ...
			[
				'class' => ActionColumn::className(),
				'visibleButtons' => [
					'update' => \Yii::$app->user->can('updateUser'),
					'delete' => \Yii::$app->user->can('deleteUser'),
				],
			],
		],
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'username',
            //'rest_token',
            //'email:email',
            //'status',
            //'created_at',
            //'updated_at',
            'uuid',
            //'accessToken',
            //'serverID',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>
    <?php Pjax::end(); ?>
</div>
