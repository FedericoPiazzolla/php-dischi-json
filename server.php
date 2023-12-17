<?php 
  // Prelevo i dati dal file .json
  $string = file_get_contents("dischi.json");
  
  // LOGICA
  $data = json_decode($string, true); 

  // la gestione di SHOW
  if (isset($_GET['id'])) {
    $selected_disk = $data[$_GEt['id']];
    $result = json_encode($selected_disk);
  } else {
    // caso INDEX - mostra lista
    $result = json_encode($data);
  }

  // invio i dati al client
  header("Content-Type: application/json");
  echo($result);

?>