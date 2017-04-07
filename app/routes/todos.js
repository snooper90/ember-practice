import Ember from 'ember';

export default Ember.Route.extend({

	model: function() {
		return this.store.findAll('todo');
	},
	updateTodo:function(){
		console.log(this)

	},
  actions:{
    updateCompletion(comp){
			comp.set('completed', !comp.get('completed'));
			this.get('updateTodo')();
    },
		// updateTodo() {
		//
	  //     console.log("update TOdso")
		//
	  //     // Ember.run.debounce(todos, 'save', 100);
	  //  }
  }

});
