import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    onButtonClick() {
      let component = this;
      this.get('saveTodo')(component);
    },
    showContent() {
      this.set('selcted', !this.get('selcted'));
    }
  }

});
