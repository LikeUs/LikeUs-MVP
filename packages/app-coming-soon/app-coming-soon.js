
ComingSoon = function(viewport) {
  viewport.goTo('ComingSoon');
};

Template.ComingSoon.events({
  "click button": function(e) {
    window.history.back();
  }

});
