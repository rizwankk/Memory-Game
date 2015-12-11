<?php
class db {

	public function connection() {
		$host = "localhost";
		$user = "root";
		$pass = "";
		$db = "memory_game";
		$mysqli = mysqli_connect($host, $user, $pass, $db);
		if ($mysqli->connect_error) {
			die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
		}
		return $mysqli ;
	}
	
}

