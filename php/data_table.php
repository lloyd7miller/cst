<?php
$servername = "server194.web-hosting.com";
$username = "allgffaw_cst";
$password = "taranto7";
$dbname = "allgffaw_cst";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}else{
    echo("Connection successful...\n\n" . $_GET['name']);
}

$sql = "SELECT * FROM BlogPosts";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Author ID</th>
                <th>Title</th>
                <th>Date created</th>
                <th>Body</th>
                <th>Timestamp</th>
            </tr>";
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>".$row["post_id"]."</td>
                <td>".$row["author_id"]."</td>
                <td>".$row["title"]."</td>
                <td>".$row["date_created"]."</td>
                <td>".$row["body"]."</td>
                <td>".$row["time_stamp"]."</td>
             </tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}
$conn->close();

?>