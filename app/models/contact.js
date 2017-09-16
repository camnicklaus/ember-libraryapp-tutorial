import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  
  email: DS.attr('string'),
  message: DS.attr('string'),

  emailIsValid: Ember.computed.match('email', /^.+@.+\..+$/),
  messageIsValid: Ember.computed.gte('message.length', 5),
  formComplete: Ember.computed.and('emailIsValid', 'messageIsValid'),

  isDisabled: Ember.computed.not('formComplete'),
});
