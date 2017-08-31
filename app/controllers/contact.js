import Ember from 'ember';

export default Ember.Controller.extend({

  emailSuccess: Ember.computed('emailIsValid', function() {
    if (this.get('emailIsValid')) {
      return 'has-success';
    }
  }),
  messageSuccess: Ember.computed('messageIsValid', function() {
    if (this.get('messageIsValid')) {
      return 'has-success';
    }
  }),

  emailIsValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  messageIsValid: Ember.computed.gte('message.length', 5),
  formComplete: Ember.computed.and('emailIsValid', 'messageIsValid'),


  isDisabled: Ember.computed.not('formComplete'),


});
