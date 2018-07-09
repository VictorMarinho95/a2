<?php 

require_once 'Lampada.php';

$lampada = new Lampada(true, 26);

$lampada->potencia = 20;

$lampada->liga()

echo "A potencia da lampada é {$lampada->potencia}";