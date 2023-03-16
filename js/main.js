const { createApp } = Vue

  createApp({
    data() {return {
        lista: [
                {
                  text: "crea la repo",
                  done: true
                },{
                  text: "scrivi il codice",
                  done: false
                },{
                  text: "commit e push",
                  done: false
                }
        ],
        indiceTodo: 0
      }},
    methods: {
      eliminaTodo(indice){
        this.lista.splice(indice,1);
      }
    }
  }).mount('#app')
