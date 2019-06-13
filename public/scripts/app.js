/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const createTweetElement = tweet => {

    //Building the header
    let $profileImage = $("<img>").addClass("avatar").attr("src",tweet.user.avatars.small);
    let $profileName = $("<span>").text(tweet.user.name);
    let $imageAndName = $("<h2>");

    $imageAndName.append($profileImage).append($profileName);

    let $handle = $("<span>").text(tweet.user.handle);
    let $tweetHeader = $("<header>");
    
    //Appending the header
    $tweetHeader.append($imageAndName).append($handle);

    //Appending the main
    let $tweetContext = $("<p>").text(tweet.content.text)
    let $tweetMain = $("<main>");

    $tweetMain.append($tweetContext);

    //Appending the footer
    let $tweetFooter = $("<footer>");
    let $datePost = $("<span>").text(tweet.created_at);
    
    $tweetFooter.append($datePost);

    let $article = $("<article>");  

    //Appendding the article
    $article.append($tweetHeader).append($tweetMain).append($tweetFooter);

    return $article;
  }

  function renderTweets(tweetsList) {
    $("#tweets-container").empty();
    for(let tweet of tweetsList){
      $("#tweets-container").prepend(createTweetElement(tweet));
    }
  }

  const loadTweet = () => { 
    $.ajax('/tweets', { method: 'GET'})
    .then(function (tweets) {
      renderTweets(tweets);
    });
  }

  //Submitting form 
  var $submittedForm= $('form');
  $submittedForm.on('submit', function (event) {
    event.preventDefault();
    $("main .empty_error").addClass("hide");
    $("main .excess_error").addClass("hide");
    //To validate the entry form of tweets
    if(0 < $("textarea").val().length && $("textarea").val().length <140) {
      $.ajax('/tweets', { method: 'POST', data: {text:$("textarea").val()}})
      .then(function () {
        loadTweet();
        $("textarea").val("");
        $(".counter").text("140");
      });
    } else {
        if($("textarea").val().length === 0){
          $("main .empty_error").removeClass("hide");
          return;
        }
        if($("textarea").val().length > 140){
          $("main .excess_error").removeClass("hide");
          return;
        }

    }

  });
  loadTweet();

  $("#nav-bar .compose").click(function(e){
    e.preventDefault();
    $("main .new-tweet").slideToggle();
    $('html, body').animate({scrollTop:0})
    $("textarea").select();
  })

});
