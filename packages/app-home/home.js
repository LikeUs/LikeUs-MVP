
Template.Home.helpers({
  profile: function() {
    if (Meteor.user()) {
      return Meteor.user().profile;
    }
  },
  avatar: function() {
    if (Meteor.user()) {
      return "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=large";
    }
  }
});

Template.Home.events({
  "click button[rel=start-over]": function(e) {
    e.preventDefault();
    Meteor.logout(function() {
      window.location = "/onboarding";
    });
  }
});
