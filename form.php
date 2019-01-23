<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$text .= "Имя: $name \n";
$text .= "Телефон: $phone \n\n";

  $file = fopen ("order.txt", "a+");
  fwrite ($file,$text);
  fclose ($file);

?>