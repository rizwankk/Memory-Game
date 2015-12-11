<?php

class saving {

	private $conn ;

	function __construct() {
		require_once 'db.php';
		$db = new db();
		$this->conn = $db->connection();
	}

	function u_insert($data) {
		$name = $data['name'];
		$email = $data['email'];
		$point = $data['point'];
		$query = "insert into memory VALUES(
					NULL,
					'{$name}',
					'{$email}',
					'{$point}'
					) " ;					
		$test = $this->conn->query($query);
		if($test) {
			$score = $this->u_max();
			if($point >= $score) {
				$high = "Congratulations You are the highest scorer. $score";
			} else {
				$high = "The Highest Score is $score";
			}
			
			$pos = $this->u_position($point);
			$position = "Your Position is $pos";
			$arr = array('a' => $high, 'b' => $position);
			return json_encode($arr);;
		}
	}
	
	function u_max() {
		$ins = "SELECT MAX(points) as max FROM memory" ;
		$result = $this->conn->query($ins);
		$row = mysqli_fetch_row($result);
		return $row[0];
	}
	
	function u_position($pt) {
		$ins = "SELECT DISTINCT (points) AS dist FROM memory ORDER BY points DESC" ;
		$result = $this->conn->query($ins);
		$i = 0 ;
		while($row = mysqli_fetch_row($result)) {
			$i++ ;
			if($pt == $row[0]) {
				return $i . '<br>';
			}	
		}
	}

	function __destruct() {
		mysqli_close($this->conn);
	}
}

$data = $_REQUEST;
$ob = new saving();
$situation = $ob->u_insert($data);
echo $situation ;




