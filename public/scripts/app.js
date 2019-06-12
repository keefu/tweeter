/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

document.addEventListener("dblclick", (event) => {
    console.log(event);
  });
  
document.addEventListener("keypress", (event) => {
    console.log(event);
  });

  $(document).ready(function() {
    const createTweetElement = tweet => {
      
      //Building the wonderful header
      let $profileImage = $("<img>").addClass("avatar").src('http://fillmurray.com/200/200');
      let $profileName = $("<span>").text("User Name");
      let $imageAndName = $("<h2>");
      $imageAndName.append($profileName).append($profileImage);

      let $handle = $("<span>").text("@user");

      let $tweetHeader = $("<header>");
      //Appending to the wonderful
      $tweetHeader.append($imageAndName).append($handle);


      let $tweetContext = $("<p>").text("Lorem ipsum dolor sit amet consectetur adipisicing elit.")
      let $tweetMain = $("<main>");
      $tweetMain.append($tweetContext);
      
      let $tweetFooter = $("<footer>");
      let $datePost = $("<span>").text('A THOUSANDS AGO IN A FAR FAR AWAY GALAXY WHERE THE CHICKENS ARE MASTERS OF THE UNIVERSES.');
      $tweetFooter.append($datePost);

      let $article = $("<article>");      

      $article.append($tweetHeader).append($tweetMain).append($tweetFooter);

      return $article;
  }

    
  })
 
//   <article>
//   <header>
//     <h2>
//       <img class="avatar" src="/images/bird.png" >
//       <span>User Name</span>
//     </h2>
//     <span>@user</span>
//   </header>
//   <main>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//   </main>
//   <footer>
//     5 days ago
//   </footer>
// </article>