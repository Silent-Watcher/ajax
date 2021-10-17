<?php 

$city = $_POST["city"];
if (strlen($city) == 0 ) {
    die();
} 
// connect to database 
$db = new mysqli("localhost","root","","iran");
if($db->errno){
    echo "در اتصال به پایگاه داده مشکلی پیش آمده";
    die();
}
// 
$db->set_charset("utf8");
// 
 $sql = "select name from city where name like '%{$city}%' limit 8";
 $result = $db->query($sql);
while( $row = $result->fetch_assoc()){
    foreach ($row as $key => $value) {
        echo "<li><i class='far fa-clock'></i><span>{$value}</span></li>";
    }
}



    

