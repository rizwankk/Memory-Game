<?php
class db {

	public function connection() {
		$host = "127.7.42.130:3306";
		$user = "admin5EpYsHG";
		$pass = "3ZdCXFCrIP49";
		$db = "memorygame";
		$mysqli = mysqli_connect($host, $user, $pass, $db);
		if ($mysqli->connect_error) {
			die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
		}
		return $mysqli ;
	}
	
}

