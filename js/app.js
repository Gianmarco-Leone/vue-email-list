/* 
? TRACCIA:   
  Attraverso l'apposita API di Boolean:
    https://flynn.boolean.careers/exercises/api/random/mail
  Generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

? BONUS:
  Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

// ? SVOLGIMENTO:

const app = Vue.createApp({
  data() {
    return {
      emailList: [],
    };
  },
  methods: {
    generateList() {
      this.emailList = [];
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((res) => {
            const result = res.data.response;
            this.emailList.push(result);
          });
      }
    },
  },
});

app.mount("#app");
