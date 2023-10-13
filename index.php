<!DOCTYPE>  
<html>  
<body>  
<?php  
$var1="How are you";
function fun(){
echo "<h2>Hello First PHP</h2>";  
}
fun();
echo"$var1 " ." he";

class Car{
    public $color;
    public $model;
    public function __construct($color,$model)
    {
        $this->color=$color;
        $this->model=$model;
    }
    public function message(){
        return nl2br ("\n car  model " .$this->color ."  " .$this->model ."\n");
    } 
}

$mycar=new Car("black","BMW");
echo $mycar->message();
define("name","GOURAV KUMAR");
echo nl2br(name ."\n");

define("cars",["a","b","c"]);
echo cars[1];
$cond=100;
if($cond<"20") echo"10 < 20";
else echo"10>20";


?>  
<h1>
    Hey
</h1>
</body>  
</html> 