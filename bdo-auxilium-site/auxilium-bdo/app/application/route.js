import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    this.transitionTo('landing');
  },

  actions: {
    home(){
      this.transitionTo('home');
    },
    about(){
      this.transitionTo('about');
    }
  }
});
