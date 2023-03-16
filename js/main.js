const { createApp } = Vue

  createApp({
    data() {return {
        lista: [
                {
                  text: "Crea la repo",
                  done: true
                },{
                  text: "Scrivi il codice",
                  done: false
                },{
                  text: "Commit e push",
                  done: false
                }
        ],
        nuovoTodo: ""
      }},
    methods: {
      eliminaTodo(indice){
        this.lista.splice(indice,1);
      },
      aggiungiTodo() {
        this.lista.push({
          text: this.nuovoTodo,
          done: false
        });
        this.nuovoTodo = "";
      },
      cambiaDone(indice){
        console.log(this.lista[indice].done);
        if (this.lista[indice].done == false){
          this.lista[indice].done = true;
        } else {
          this.lista[indice].done = false;
        }
      }
    }
  }).mount('#app')
