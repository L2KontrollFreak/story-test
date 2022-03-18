var story = 0;//the story is undefined
var form = document.getElementById('theStoryTest');//elements with matching ids to spefic task
var submit = document.getElementById('continueButton');
var reset = document.getElementById('resetButton');
var answer = '';



var story_tell = {
    "start": {
        "dialogue": " This is a story test",
        "answers": {
            "a": "okay",
            "b": "not okay",
            "c": "fudge",
        }
    },
    //test
    "1_a": {
        "dialogue": "this story test is amazing",
        "answers": {
            "a": " this isn't amazing",
            "b": "it's cool",
            "c": "not bad at all",
        }
    }
};
// continue link
submit.addEventListener('mouseup', function(){ //when a button on a pointing device is released while the pointer is located inside it
    answer = form.querySelectorAll('input[type=radio]:checked')[0].value; //a list of the document's elements that match the specified group of selectors.
    if(answer) {
      story++;//increment or add 1 to
      populateForm(story + '_' + answer);//if a radio is checked populate our form with the answer
      console.log("Story time!"); // Console log to make sure things are working
    }
  });
  
  // Reset button
  function resetForm(){
      document.getElementById("restartButton").reset();
  }
  
  // Generate answers from story
  function populateForm(story) {
    var current_story = story_tell[story];//take values from story_telling story
    var text = '';
  
    for(var prop in current_story['answers']) {
      if(current_story['answers'].hasOwnProperty(prop)) { //method returns a boolean (true or false) indicating whether the object has the specified property as its own property
        text += '<label><input type="radio" name="answer" value="a" "b" "c"' + prop + '"/><span>' + current_story['answers'][prop] + '</span></label>';// adding answers to the story
      }
    }
  
    form.querySelector('p').innerHTML = current_story.dialogue;//write questions to the p tag in the HTML
    form.querySelector('fieldset').innerHTML = text;//write answers to the fieldset 
  }
  
  populateForm('start');//set the form at the beginning

