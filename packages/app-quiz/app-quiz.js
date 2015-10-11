
var QuizDecorator = function(data) {
  var dep = new Deps.Dependency();

  this.questions = function() {
    dep.depend();
    return data.questions;
  };

  this.answerQuestion = function(id, answer) {
    data.questions[id].answer = answer;
    data.completed = _.all(_.pluck(data.questions, 'answer'));
    dep.changed();
  };

  this.isComplete = function() {
    dep.depend();
    return data.completed;
  };

};


TakeQuiz = function(quiz, viewport) {

  var deferred = Q.defer();

  var decoratedQuiz = new QuizDecorator(quiz);

  viewport.goTo('TakeQuiz', { data: { quiz: decoratedQuiz } });

  Deps.autorun(function(comp) {
    if (decoratedQuiz.isComplete()) {
      comp.stop()
      deferred.resolve(quiz);
    }
  });

  return deferred.promise;
};


function answerQuestion(e) {
  e.preventDefault();


  var template = Template.instance();

  var quiz = template.data.quiz;

  var questionId = e.currentTarget.dataset.questionId;

  template.data.quiz.answerQuestion(questionId, this);

}

Template.TakeQuiz.events({
  'click .quiz-answer': answerQuestion
});
