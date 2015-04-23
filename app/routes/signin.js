import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  actions: {
    signin: function() {
      var user = this.get('store').createRecord('user', {
        name: this.get('controller.username')
      }).save();
      this.set('session.user', user);
      this.set('controller.username', '');
      this.transitionTo('chat-room');
    }
  }
});
