if (Meteor.isClient) {
  Template.registerHelper("stringify", JSON.stringify);
}

var quiz = {
  questions: [
    {
      id: "0",
      question: "Morning person?",
      type: "Binary",
      answers: ["No", "Yes"],
      template: "Binary",
      theme: "pale-green",
      image: "/images/morningperson.png"
    },

    {
      id: "1",
      question: "Favorite beverage?",
      type: "MultipleChoice",
      answers: ["Cocktail, please", "Beer!", "I prefer wine", "Just water, thanks"],
      template: "MultipleChoice",
      theme: "light-blue",
      image: "/images/beverage.png"
    },

    {
      id: "2",
      question: "Party?",
      type: "MultipleChoice",
      answers: ["A couple people", "Several people", "More the merrier!", "Me and a book"],
      template: "MultipleChoice",
      theme: "purple",
      image: "/images/party.png"
    },
    {
      id: "3",
      question: "Hugger?",
      type: "Binary",
      answers: ["No", "Yes"],
      template: "Binary",
      theme: "dark-blue",
      image: "/images/hugger.png"
    },

    {
      id: "4",
      question: "Favorite class in school?",
      type: "MultipleChoice",
      answers: ["Math or Science", "P.E.", "English", "Art or Music"],
      template: "MultipleChoice",
      theme: "light-teal",
      image: "/images/favoriteclass.png"
    },
  ]
};

FlowRouter.route('/', {
  triggersEnter: function(context, redirect) {
    redirect('/onboarding');
  }
});

FlowRouter.route('/onboarding', {
  action: function() { RunOnboarding(quiz, Viewport('main')); }
});

FlowRouter.route('/home', {
  action: function() { Viewport('main').goTo("Home") }
});

FlowRouter.route('/coming-soon', {
  action: function() { Viewport('main').goTo('ComingSoon'); }
});
