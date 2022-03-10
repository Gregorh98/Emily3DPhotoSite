var files = <?php
$out = array();
foreach (glob('pictures/jpeg/*') as $filename) {
    $p = pathinfo($filename);
    $out[] = $p['filename'];
}

echo json_encode($out);
?>;

files = files.reverse();

var descriptions = <?php 
$csvFile = file('descriptions.csv');
    $data = [];
    foreach ($csvFile as $line) {
        $data[] = str_getcsv($line);
    }
    
echo json_encode($data)
?>;
