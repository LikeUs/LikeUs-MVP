// Write your package code here!



Template.RunQuiz.helpers({
});


function answerQuiz(e) {
  e.preventDefault();

  var button = e.currentTarget;

  var template = Template.instance();


  template.data.answer = this;

  template.$(".card").hide();

}


Template.RunQuiz.events({

})


Template.Binary.events({
  "click .quiz-answer": answerQuiz
});

Template.MultipleChoice.events({
  "click .quiz-answer": answerQuiz
});
