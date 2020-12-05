

var app = new Vue({
  el: '#app',
  data: {
    deputado_id: 0,
  },
  created: function(){
    this.deputado_id = findGetParameter('deputado_id');
  }
})