var runTemplate = function(template, viewport) {
  var deferred = Q.defer();

  viewport.goTo(template, { data: { deferred: deferred } });

  return deferred.promise;
};

RunOnboarding = function(quiz, viewport) {

  return TakeQuiz(quiz, viewport)
    .then(function() {
      return runTemplate("OnboardingContinue", viewport);

    })
    .then(function() {
      return runTemplate("OnboardingGetPhone", viewport);
    })
    .then(function() {
      return runTemplate("OnboardingVerifyPhone", viewport);
    })
    .then(function() {
      return runTemplate("OnboardingFacebook", viewport);
    })
    .then(function() {
      FlowRouter.go("/home");
    }).done();

};


Template.OnboardingContinue.events({
  "click [rel=continue]": function() {
    var deferred = Template.currentData().deferred;

    deferred.resolve();
  }
});

Template.OnboardingGetPhone.events({
  "submit form": function(e) {
    e.preventDefault();
    var phone = e.currentTarget.phone.value;
    console.log('foo');

    var deferred = Template.currentData().deferred;

    Meteor.users.update(Meteor.userId(), {
      $set: {
        phone: phone
      }
    }, function(err) {
      if (err) {
        console.log(err);
        deferred.reject(err);
      } else {
        Meteor.sendVerificationCode(phone);
        deferred.resolve();
      }
    });
  }
});

Template.OnboardingVerifyPhone.events({
  "submit form": function(e) {
    e.preventDefault();
    var code = e.currentTarget.code.value;
    var deferred = Template.currentData().deferred;
    Meteor.loginWithSms(Meteor.user().phone, code, function(err) {
      if (err) {
        console.log(err);
        deferred.reject(err);
      } else {
        deferred.resolve();
      }
    });

  }
});

Template.OnboardingFacebook.events({
  "submit form": function(e) {
    e.preventDefault();
    var deferred = Template.currentData().deferred;
    var options = {};
    options.requestPermissions = Meteor.settings.public.facebook.permissions;

    Meteor.loginWithFacebook(options, function(err) {
      if (err) {
        console.log(err);
        deferred.reject(err);
      } else {
        deferred.resolve();
      }
    });
  }
});

Template.OnboardingProfile.helpers({
  profileData: function() { return Meteor.user(); }
});

Template.OnboardingProfile.events({
  "submit form": function(e) {
    e.preventDefault();
    Meteor.logout(function() {
      window.location.reload();
    });
  }
});
