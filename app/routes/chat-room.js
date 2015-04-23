import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  beforeModel: function() {
    if(!this.get('session.isAuthenticated')) {
      this.transitionTo('signin');
    }
  },
  model: function() {
    return this.get('store').find('message');
  },
  actions: {
    postMessage: function() {
      this.get('store').createRecord('message', {
        message: this.get('controller.newMessage'),
        user: this.get('session.user')
      }).save();
      this.set('controller.newMessage', '');
    }
  }
});
