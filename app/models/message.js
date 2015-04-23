import DS from 'ember-data';

var Message = DS.Model.extend({
  createdAt: DS.attr('date'),
  message: DS.attr('string'),
  user: DS.belongsTo('user', { async: true })
});

Message.reopenClass({
  FIXTURES: []
});

export default Message;
