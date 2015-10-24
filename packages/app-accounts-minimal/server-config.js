
AccountsGuest.anonymous = true
Meteor.users.allow({
  update: function(userId, doc, fieldNames, modifier) {
    return (userId && doc._id === userId);
  }
})


Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {'phone': 1}});
  } else {
    this.ready();
  }
});
