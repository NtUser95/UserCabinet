<?PHP
use yii\bootstrap\ActiveForm;
use yii\helpers\Html;

$this->title = 'UserCP default';
$this->params['breadcrumbs'][] = $this->title;
?>

<div class="usercp-default-index">
    <div class="panel panel-default col-md-6">
        <div class="panel-body">
            <div id="skinpreview" style="height: 300px;"></div>
            <div class="col-lg-12">
                <?PHP
                $form = ActiveForm::begin([
                    'id' => 'render',
                    'action' => Yii::getAlias('@web') . '/usercp/render',
                    'options' => [
                        'class' => 'form-horizontal col-lg-12',
                        'enctype' => 'multipart/form-data'
                    ],
                ]);?>

                <?= $form->field($render_form, 'skin')->fileInput()->label('Загрузить скин'); ?>
                <?= $form->field($render_form, 'cape')->fileInput()->label('Загрузить плащ'); ?>
                
                <?= Html::submitButton('Отправить', ['class' => 'btn btn-primary']); ?>
                
                <?PHP ActiveForm::end(); ?>
            </div>
        </div>
    </div>
    <div class="panel panel-default col-md-6">
        <div class="panel-body">
            <table class="table table-bordered">
                <tr><td>Никнейм</td><td><?= Html::encode(Yii::$app->user->identity->username) ?></td></tr>
                <tr><td>Баланс</td><td><?= Yii::$app->user->identity->balance ?></td></tr>
                <tr><td>Дата регистрации</td><td>31.07.1995</td></tr>
                <tr><td>Пункт меню</td><td>31.07.1995</td></tr>
                <tr><td>Пункт меню</td><td>31.07.1995</td></tr>
            </table>
        </div>
    </div>
    <div class="panel panel-default col-md-6">
        <div class="panel-body">
            <?= Html::a('Изменить email', ['/email/recovery'],['class' => 'btn btn-primary']); ?>
            <?= Html::a('Изменить пароль', ['/password/recovery'],['class' => 'btn btn-primary']); ?>
        </div>
    </div>
</div>

<script src="/js/three.js"></script>
<script src="/js/render.js"></script>
<script>
    window.onload = function()
    {
        P = new MSP({
            showcape: true,
            running: false,
            spin: false,
            freezecamera: true

        });

        P.setDefault("<?= \Yii::getAlias('@skin_web_path')?>/steve.png");
        P.changeSkin("<?= \Yii::getAlias('@skin_web_path')?>/<?= strtolower(\Yii::$app->user->identity->username)?>.png");
        P.changeCape("<?= \Yii::getAlias('@cape_web_path')?>/cape_arkazus.png");
    }
</script>