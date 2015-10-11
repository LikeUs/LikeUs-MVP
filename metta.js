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
      theme: "pale-green"
    },

    {
      id: "1",
      question: "Favorite beverage?",
      type: "MultipleChoice",
      answers: ["Cocktail, please", "Beer!", "I prefer wine", "Just water, thanks"],
      template: "MultipleChoice",
      theme: "light-blue"
    },

    {
      id: "2",
      question: "Party?",
      type: "MultipleChoice",
      answers: ["A couple people", "Several people", "More the merrier!", "Me and a book"],
      template: "MultipleChoice",
      theme: "purple"
    },
    {
      id: "3",
      question: "Hugger?",
      type: "Binary",
      answers: ["No", "Yes"],
      template: "Binary",
      theme: "dark-blue"
    },

    {
      id: "4",
      question: "Favorite class in school?",
      type: "MultipleChoice",
      answers: ["Math or Science", "P.E.", "English", "Art or Music"],
      template: "MultipleChoice",
      theme: "light-teal"
    },
  ]
};

if (Meteor.isClient) {
  Meteor.startup(function() {
    var main = Viewport('main');

    TakeQuiz(quiz, main)
      .then(function() {
        ComingSoon(main);
      });

  });
}
