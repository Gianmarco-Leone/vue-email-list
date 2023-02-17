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
      emailMessageList: [
        "Ok",
        "Si",
        "Tutto bene, tu?",
        "Non posso rispondere",
        "Non ho voglia di parlare",
        "Non ho capito",
        "Perfetto",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nostrum?",
        "Verrà ricontattato appena possibile",
      ],
    };
  },
  computed: {
    messageListLength() {
      return this.emailMessageList.length;
    },
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

    // Funzione per generare numero randomico tra due numeri
    generateRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
  },
});

app.mount("#app");
