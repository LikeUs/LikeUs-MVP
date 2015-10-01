
function answerQuestion(e) {
  e.preventDefault();

  var button = e.currentTarget;

  var template = Template.instance();


  template.data.answer = this;

  template.$(".card").hide();

}

Template.Binary.events({
  "click .quiz-answer": answerQuestion
});

Template.MultipleChoice.events({
  "click .quiz-answer": answerQuestion
});
