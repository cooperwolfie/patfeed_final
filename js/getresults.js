function getResults() {
  // Initialize scores
  var no = 0;
  var yes = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'yes') {
        yes++;
      }

      else if (e.value == 'no') {
        no++;
      }
    }
  }

  // Determine result

  // What is the highest value?

  var max = Math.max(yes, no);

    // Form a message
    var title = "Pretend To Order a Starbucks Drink and We Will Tell If You're Doing Well In Life";
    var message;

  if (max == yes) {
    message = "You're doing well!";
  }
  else if (max == no) {
    message = "You may need a little advice.";
  }
var counts = "Yes: " + yes + " No: " + no;

  // Display result
    document.getElementById('title').innerHTML = title;
    document.getElementById('title').style.fontSize = "medium";
    document.getElementById('title').style.color = "#767d89";

    document.getElementById('count').innerHTML = message;
    document.getElementById('count').style.fontSize = "xx-large";

    document.getElementById('description').innerHTML = deshist;
    document.getElementById('description').style.fontSize = "medium";
    document.getElementById('description').style.color = "#767d89";
    //document.getElementById('result').innerHTML = counts;
  }
