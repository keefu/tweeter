/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];
document.addEventListener("dblclick", (event) => {
    console.log(event);
  });
  
document.addEventListener("keypress", (event) => {
    console.log(event);
  });

  $(document).ready(function() {
    const createTweetElement = tweet => {

      //Building the header
      let $profileImage = $("<img>").addClass("avatar").attr("src","http://fillmurray.com/200/200");
      let $profileName = $("<span>").text("Jean");
      let $imageAndName = $("<h2>");

      $imageAndName.append($profileImage).append($profileName);

      let $handle = $("<span>").text("@lily");
      let $tweetHeader = $("<header>");
      
      //Appending the header
      $tweetHeader.append($imageAndName).append($handle);
      //Appending the main
      let $tweetContext = $("<p>").text("Lorem ipsum dolor sit amet consectetur adipisicing elit.")
      let $tweetMain = $("<main>");
      $tweetMain.append($tweetContext);
      //Appending the footer
      let $tweetFooter = $("<footer>");
      let $datePost = $("<span>").text('A THOUSANDS AGO IN A FAR FAR AWAY GALAXY WHERE THE CHICKENS ARE MASTERS OF THE UNIVERSES.');
      
      $tweetFooter.append($datePost);

      let $article = $("<article>");  

      //Appendding the article
      $article.append($tweetHeader).append($tweetMain).append($tweetFooter);

      return $article;
    }

    var $tweet = createTweetElement(tweetData);
    $("#tweets-container").append($tweet);


    function renderTweets(tweetsList) {
      console.log(tweetsList);
      for(let tweet of tweetsList){
        $("#tweets-container").append(createTweetElement(tweet));
      }
    }
    renderTweets(data);

  });

  




  // $(document).ready(function() {
  //   const renderTweets = 
  // })
 
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