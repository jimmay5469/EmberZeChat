import Ember from 'ember';

export default Ember.Service.extend({
  isAuthenticated: Ember.computed.notEmpty('user'),
  user: null
});
