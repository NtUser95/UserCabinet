<?PHP
use yii\bootstrap\ActiveForm;
use yii\helpers\Html;

$this->title = 'Account history';
$this->params['breadcrumbs'][] = [
    'template' => "<li><b>{link}</b></li>\n",
    'label' => 'UserCP',
    'url' => ['/usercp/default'],
];
$this->params['breadcrumbs'][] = [
    'label' => 'История аккаунта',
    'url' => ['/usercp/history/']
];
?>

<b>History index page</b>