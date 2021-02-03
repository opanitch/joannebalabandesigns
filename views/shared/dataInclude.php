<?php
    $dataUrl = __DIR__ . "/../../data/projectData.json";

    $json = file_get_contents($dataUrl);
    $data = json_decode($json);
?>