<?php 
  // Prelevo i dati dal file .json
  $string = file_get_contents("dischi.json");
  
  // trasformo la string ain array
  $list = json_decode($string, true);

  // trasformo array in lista
  $json = json_encode($list);

?>