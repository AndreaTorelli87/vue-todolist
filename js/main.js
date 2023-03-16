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
        indice: 0
      }
    }
  }).mount('#app')
