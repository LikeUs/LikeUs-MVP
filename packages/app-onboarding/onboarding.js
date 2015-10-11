

var OnboardingContinue = function(viewport) {
  var deferred = Q.defer();

  viewport.goTo("OnboardingContinue", { data: { deferred: deferred } });

  return deferred.promise;
};


RunOnboarding = function(quiz, viewport) {

  return TakeQuiz(quiz, viewport)
    .then(function() {

      viewport.goTo("OnboardingContinue");
      return OnboardingContinue(viewport);

    })
    .then(function() {
      return ComingSoon(viewport);
    }).done();

};


Template.OnboardingContinue.events({
  "click [rel=continue]": function() { Template.currentData().deferred.resolve(); }
});
