<ul id="accordion" class="accordion">
    <li>
      <div class="link"><i class="fa fa-database"></i>User<i class="fa fa-chevron-down"></i></div>
      <ul class="submenu">
        <li><a href="<?= Yii::getAlias('@web') ?>/usercp/index">Profile</a></li>
        <li><a href="#">Security</a></li>
      </ul>
    </li>
    <li>
      <div class="link"><i class="fa fa-code"></i>Account history<i class="fa fa-chevron-down"></i></div>
      <ul class="submenu">
        <li><a href="<?= Yii::getAlias('@web') ?>/usercp/history/auth">Auth</a></li>
        <li><a href="<?= Yii::getAlias('@web') ?>/usercp/history/balance">Money</a></li>
        <li><a href="<?= Yii::getAlias('@web') ?>/usercp/history/auth_data">Pass && email changes</a></li>
        <li><a href="<?= Yii::getAlias('@web') ?>/usercp/history/punishments">Bans && mutes</a></li>
      </ul>
    </li>
    <li>
      <div class="link"><i class="fa fa-mobile"></i>Devices<i class="fa fa-chevron-down"></i></div>
      <ul class="submenu">
        <li><a href="#">Tablet</a></li>
        <li><a href="#">Mobile</a></li>
        <li><a href="#">Desktop</a></li>
      </ul>
    </li>
    <li>
      <div class="link"><i class="fa fa-globe"></i>Global<i class="fa fa-chevron-down"></i></div>
      <ul class="submenu">
        <li><a href="#">Google</a></li>
        <li><a href="#">Bing</a></li>
        <li><a href="#">Yahoo</a></li>
      </ul>
    </li>
</ul>