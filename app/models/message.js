import DS from 'ember-data';

var Message = DS.Model.extend({
  timestamp: DS.attr('date'),
  text: DS.attr('string'),
  owner: DS.belongsTo('user', { async: true })
});

Message.reopenClass({
  FIXTURES: []
});

export default Message;
