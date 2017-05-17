function checkIt() {
  // Initialize scores
  var history = 0;
  var athletics = 0;
  var art = 0;
  var science = 0;
  var math = 0;
  var language = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'history') {
        history++;
      }

      else if (e.value == 'athletics') {
        athletics++;
      }

      else if (e.value == 'art') {
        art++;
      }

      else if (e.value == 'science') {
        science++;
      }

      else if(e.value == 'math') {
        math++;
      }

      else if(e.value == 'language') {
        language++;
      }
    }
  }

  // Determine result

  // What is the highest value?

  var max = Math.max(history, athletics, art, math, science, language);

    // Form a message
    var title = "Tell Us How You Are As a Pok&eacute;mon And We Will Tell You Your Favourite Subject";
    var message;

  if (max == history) {
    message = "Your favorite subject is: History!";
  }
  else if (max == athletics) {
    message = "Your favorite subject is: Athletics/Gym! Barbells is your favorite toy and you thrive to be the best!";
  }
  else if (max == math) {
    message = "Your favorite subect is: Math! You speak fluently in numbers and problems will never go unsolved!";
  }
  else if (max == art) {
    message = "Your favorite subject is: Art! You try new things and paint the world in vibrant colors!";
  }
  else if (max == science) {
    message = "Your favorite subject is: Science! Why and how things do stuff is pretty much what you think about all day long.";
  }
  else if (max == language) {
    message = "Your favorite subject is: Language! Parlez vous Français?";
  }
var description;
if (max == history){
  message2="You like learning about the past and the changes we made from our mistakes. Many people don't understand why history has to be a subject, but you know why it's so important.";
}
var counts = "history: " + history + " math: " + math + " athletics: " + athletics + " science: " + science + " language: " + language;

  // Display result
    document.getElementById('title').innerHTML = title;
    document.getElementById('title').style.fontSize = "medium";
    document.getElementById('title').style.color = "#767d89";

    document.getElementById('count').innerHTML = message;
    document.getElementById('count').style.fontSize = "xx-large";

    //document.getElementById('description').innerHTML = message2;
    //document.getElementById('description').style.fontSize = "medium";
    //document.getElementById('description').style.color = "#767d89";
  //document.getElementById('result').innerHTML = counts;
}
