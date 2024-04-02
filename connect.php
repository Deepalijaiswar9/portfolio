<?php
$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient ="deepalijaiswar00@gmail.com";

mail($recipient,$subject,$message,$mailheader)
or die("Error!");

echo'

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Deepali Jaiswar - Web Developer</title>

  <link rel="stylesheet" type="text/css" href="./assests/slick/slick.css" />
  <link rel="stylesheet" type="text/css" href="./assests/slick/slick-theme.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="./assests/css/header.css">
  <link rel="stylesheet" href="./assests/css/style.css">
</head>

<body>

  <div class="container">
      <section class="contactMe" id="contactMe">
        <div class="wrapper">
          <div class="contactHeading">
            <h3>Thank you for contacting me. I will get back to you soon</h3>
          </div>
          <p class="back">Go back to the <a href="./index.html">hompage</a></p>
        </div>
      </section>
  </div>

  <script src="./assests/js/script.js"></script>
  <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
  <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
  <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
  <script type="text/javascript" src="./assests/slick/slick.min.js"></script>
</body>

</html>

';
?>