<!----------------------------------------------------------------------------------------------------------------
--
#Original Author:                                   #Joshua Milbourne
#Date Created:                                      #1/30/21
#Version:                                           #1.1
#Date Last Modified:                                #1/31/21
#Modified by:                                       #Joshua Milbourne
#Modification log:                                  #

        1/30/21    v1.0    Joshua Milbourne    Created home page and connected to home.html form
        01/31/21    v1.1    Joshua Milbourne    Cleaned up code and added comments
--
------------------------------------------------------------------------------------------------------------------>

<?php

$email_newsletter = filter_input(INPUT_GET, 'email_address_news');
$first_name_newsletter = filter_input(INPUT_GET, 'first_name_news');
$last_name_newsletter = filter_input(INPUT_GET, 'last_name_news');

if ($test) {
    $error = 'Please check all your entries and try again';
    echo "Form Data Error: $error";
    exit();
} else {
    $dsn = 'mysql:host=localhost;dbname=fancypantsmembers';
    $username = 'fp_emp';
    $password = 'pa55word';

    try {
        $db = new PDO($dsn, $username, $password);
    } catch (PDOException $e) {
        $error_message = $e->getMessage();
        echo "Database error: $error_message";
    }

    $query = "INSERT INTO newsletter 
                (email, firstName, lastName)
            VALUES
                (:email, :first_name, :last_name)";
    $statement = $db->prepare($query);
    $statement->bindValue(':email', $email_newsletter);
    $statement->bindValue(':first_name', $first_name_newsletter);
    $statement->bindValue(':last_name', $last_name_newsletter);
    $statement->execute();
    $statement->closeCursor();
}


?>


<!DOCTYPE html>
<html lang="en" id="home_page" class="html_back_img">
    <head>
        <meta charset="UTF-8">
        <meta name="author" content="Joshua Milbourne">
        <meta name="description" content="FancyPants Event Designs, designing your perfect event no matter how fancy your pants are">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!--------------------------------------------------------- CSS Links -->
        <link rel="stylesheet" href="../styles/normalize.css">
        <link rel="stylesheet" href="../styles/style.css">
        <!--------------------------------------------------------- favicon -->
        <link rel="apple-touch-icon" sizes="180x180" href="../images/favicon_io/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon_io/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="../images/favicon_io/favicon-16x16.png">
        <link rel="manifest" href="../images/favicon_io/site.webmanifest">

        <title>FancyPants Event Designs Home Page</title>
    </head>
    <body>
        <div class="content">
            <header>
                <div><a href="home.html"><img src="../images/fancyPants.png" alt="FancyPants logo" height="64px" id="header_logo"><h1 id="headerH1">FancyPants Event Designs</h1></a></div>
                <div id="nav_items"><a href="home.html"> Home </a>&#x2758;<a href="faq.html"> FAQs </a>&#x2758;<a href="contact.html"> Membership </a>&#x2758;<a href="wishList.html"> Wish List </a>&#x2758;<a href="photos.html"> Photos </a>&#x2758;<a href="reviews.html"> Customer Reviews </a></a>&#x2758;<a href="bookUs.html"> Book Us</a>
                </div>
            </header>
            <main>
                <section id="greetings" class="main">
                    <h1>Welcome to FancyPants Event Designs</h1>
                    <h2>We will design your perfect event...<br>
                        No matter how fancy your pants are!</h2>
                </section>
                <section class="main" id="newsletter">
                    <h2 id="newsletter_heading">Subscribe to our newsletter</h2>
                    
                    <!-- Thank you message -->
                    <br><br>
                    <h3>Thank you for signing up for our newsletter</h3>
                    <br><br>
                </section>
            </main>
        </div>
        <footer>
            <p>&#169;2020 FancyPants Event Designs&#8482;</p>
            <p>Phone: <a href="tel:123-456-7890">123-456-7890</a> Email: <a href="mailto:fancy@FancyPants.com">fancy@FancyPants.com</a></p>
            <p><address>P.O. Box #1324<br>123 FancyPants Ln<br>Springfield, MO 65814<br>USA</address></p>
            <p><a href="https://www.facebook.com/" target="blank"><img src="../images/fb.png" alt="facebook"></a>
                <a href="https://twitter.com/" target="blank"><img src="../images/tw.png" alt="twitter"></a>
                <a href="https://www.youtube.com/" target="blank"><img src="../images/yt.png" alt="youtube"></a>
                <a href="https://www.instagram.com/" target="blank"><img src="../images/ig.png" alt="instagram"></a></p>
        </footer>
    </body>
</html>