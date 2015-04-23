import DS from 'ember-data';

var User = DS.Model.extend({
  username: DS.attr('string'),
  lastLogin: DS.attr('date')
});

User.reopenClass({
  FIXTURES: []
});

export default User;
