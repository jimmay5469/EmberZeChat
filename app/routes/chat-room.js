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
  socketService: Ember.inject.service('websockets'),
  init: function() {
    this._super.apply(this, arguments);
    var socket = this.get('socketService').socketFor('wss://ahalogy.fwd.wf/');
    socket.on('open', this.myOpenHandler, this);
    socket.on('message', this.myMessageHandler, this);
  },
  myOpenHandler: function(event) {
    console.log('On open event has been called: ' + event);
  },
  myMessageHandler: function(event) {
    console.log('Message: ' + event.data);
  },
  actions: {
    postMessage: function() {
      this.get('store').createRecord('message', {
        message: this.get('controller.newMessage'),
        user: this.get('session.user')
      }).save();
      this.set('controller.newMessage', '');
      var socket = this.get('socketService').socketFor('wss://ahalogy.fwd.wf/');
      socket.send('Hello Websocket World', true);
    }
  }
});
