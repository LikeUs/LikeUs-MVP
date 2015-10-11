if (Meteor.isClient) {
  Template.registerHelper("stringify", JSON.stringify);
}

var quiz = {
  questions: [
    {
      question: "Morning person?",
      type: "Binary",
      answers: ["No", "Yes"],
      template: "Binary",
      theme: "pale-green"
    },

    {
      question: "Favorite beverage?",
      type: "MultipleChoice",
      answers: ["Cocktail, please", "Beer!", "I prefer wine", "Just water, thanks"],
      template: "MultipleChoice",
      theme: "light-blue"
    },

    {
      question: "Party?",
      type: "MultipleChoice",
      answers: ["A couple people", "Several people", "More the merrier!", "Me and a book"],
      template: "MultipleChoice",
      theme: "purple"
    },
    {
      question: "Hugger?",
      type: "Binary",
      answers: ["No", "Yes"],
      template: "Binary",
      theme: "dark-blue"
    },

    {
      question: "Favorite class in school?",
      type: "MultipleChoice",
      answers: ["Math or Science", "P.E.", "English", "Art or Music"],
      template: "MultipleChoice",
      theme: "light-teal"
    },
  ]
}

if (Meteor.isClient) {
  Meteor.startup(function() {
    TakeQuiz(quiz, Viewport('main'));
  });
}
