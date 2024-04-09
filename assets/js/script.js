const { createApp } = Vue;
createApp({
    data() {
        return {
            message: 'Hello Vue! :)',
            otherMessage: 'Ciao ciao'
        };
    }
}).mount('#app');