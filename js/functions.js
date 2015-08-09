$(document).ready(function() {

  //URL Variables.  The Math.Random() query is appended to the file
  //locations in order to ensure we do not load a cached version.
  var url = window.location.href;
  var aboutURL = "about.html?t=" + Math.random();
  var multiplayerURL = "multiplayer.html?t=" + Math.random();
  var careersURL = "careers.html?t=" + Math.random();
  var legalURL = "legal.html?t=" + Math.random();
  var postsURL = "blog/posts.json?t=" + Math.random();

  //Page positions
  var top = 10;

  //Number of blog posts to display
  var numPosts = 5;

  //Caption animation
  var caption = $(".js-caption").text();
  var caption_length = 0;
  $(".js-caption").text("");
  $(".js-caption").css("display", "block");
  setCaption();


  //Open the correct page content according to url fragment
  //This is our page 'routing'
  if(url.indexOf("#about") > -1) {
    document.title = "GameName | About";
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    $(".page-container").load(aboutURL);
  }
  if(url.indexOf("#multiplayer") > -1) {
    document.title = "GameName | Multiplayer";
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    $(".page-container").load(multiplayerURL);
  }
  if(url.indexOf("#contact") > -1) {
    document.title = "GameName | Contact";
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    $(".page-container").load(aboutURL);
  }
  if(url.indexOf("#careers") > -1) {
    document.title = "GameName | Careers";
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    $(".page-container").load(careersURL);
  }
  if(url.indexOf("#legal") > -1) {
    document.title = "GameName | Legal";
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    $(".page-container").load(legalURL);
  }

  //Read last 5 blog posts and display them
  $.get(postsURL, function(blog) {

    //If there are less than 5 posts, show all the posts available
    if(blog.posts.length < 5) {
      numPosts = blog.posts.length;
    }

    for(var i = 0; i < numPosts; i++) {
      $("#news .container").append("<div class='post'><h3>" +
        blog.posts[i].heading + "<small> " +
        blog.posts[i].date + " " + blog.posts[i].time + "</small></h3><p>" +
        blog.posts[i].post + "</p></div>");
    }
  });


  //Choose which page to load when selected
  $("[href='#home']").click(function() {
    window.open ("index.html", "_self");
  });
  $("[href='#about']").click(function() {
    document.title = "GameName | About";
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    $(".page-container").load(aboutURL);
  });
  $("[href='#multiplayer']").click(function() {
    document.title = "GameName | Multiplayer";
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    $(".page-container").load(multiplayerURL);
  });
  $("[href='#contact']").click(function() {
    document.title = "GameName | Contact";
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    $(".page-container").load(aboutURL);
  });
  $("[href='#careers']").click(function() {
    document.title = "GameName | Careers";
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    $(".page-container").load(careersURL);
  });
  $("[href='#legal']").click(function() {
    document.title = "GameName | Legal";
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    $(".page-container").load(legalURL);
  });


  //Reveal opaque navigation bar on scroll down. 
  $(window).scroll(function() {
    //Shrink navbar while scrolling down
    if ($(document).scrollTop() > top) {
      $(".navbar").addClass("js-nav-shrink").fadeIn("slow");
      $(".navbar-brand").css("display", "inline-block");
    }
    else {
      $(".navbar").removeClass("js-nav-shrink");
      $(".navbar-brand").css("display", "none");
    }
  });

  $(".navbar .power-arrow").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 700);
  });

  //Caption animation
  function setCaption() {
    setTimeout(function() {
      if(caption[caption_length] == " ") { $(".js-caption").html($(".js-caption").text() + " &#149; "); }
      $(".js-caption").text($(".js-caption").text() + caption[caption_length]);
      caption_length = caption_length + 1;

      if(caption_length != caption.length) {
        setCaption();
      }
      else {
        //End of caption
        $("#header-title").addClass("js-heading-glow");
        return;
      }
    }, 200);
  }

});