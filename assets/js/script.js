const { createApp } = Vue;
createApp({
    data() {
        return {
            arrayMails: []
        };
    },
    methods: {
        getMailsFromApi() {
            // Ciclo for che genera 10 mail
            for (let i = 0; i < 10; i++) {
                this.getMail();
            }
        },
        getMail() {
            // Chiamiamo l'api che genera una main
            // quando otteniamo la risposta: popoliamo la variabile arrayMails col
            // la mail random ottenua dall'API
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').
            then((response) => {
                const serverData = response.data;
                this.arrayMails.push(serverData.response);
            });
        }
    },
    mounted() {
        this.getMailsFromApi();
    }
}).mount('#app');

