<?php
	require "connect.php";
	
	$query = mysqli_query($con, "SELECT * FROM login");
	while($row = mysqli_fetch_array($query)){
		<table class='table table-bordered table-striped'>
          <tr>
           <td>id</td>
           <td>name</td>
           <td>username</td>
           <td>email</td>
           </tr>
        <?php
           $i=0;
        while($row = mysqli_fetch_array($result)) {
       ?>
    <tr>
      <td><?php echo $row["id"]; ?></td>
      <td><?php echo $row["name"]; ?></td>
      <td><?php echo $row["username"]; ?></td>
      <td><?php echo $row["email"]; ?></td>
    </tr>
    <?php
    $i++;
   }
   ?>
    </table>
	}
?>

<?php
   $servername = "localhost";
   $username = "root";
   $password = "";
   $dbname = "gfg";
     
   // connect the database with the server
   $conn = new mysqli($servername,$username,$password,$dbname);
     
    // if error occurs 
    if ($conn -> connect_errno)
    {
       echo "Failed to connect to MySQL: " . $conn -> connect_error;
       exit();
    }
  
    $sql = "select * from student";
    $result = ($conn->query($sql));
    //declare array to store the data of database
    $row = []; 
  
    if ($result->num_rows > 0) 
    {
        // fetch all data from db into array 
        $row = $result->fetch_all(MYSQLI_ASSOC);  
    }   
?>