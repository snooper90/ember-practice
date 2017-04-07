import Ember from 'ember';

export default Ember.Controller.extend({
showingNewTodo: false,
newTodo:{
  title:'',
  content:''
},
actions:{
  showNewTodo(){
    this.set('showingNewTodo', true)
  }
}
});
