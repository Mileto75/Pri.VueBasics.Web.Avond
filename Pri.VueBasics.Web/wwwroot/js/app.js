let vue = new Vue({
    el: "#app",
    data: {
        pageTitle: "Our first Vue app",
        url: "http://www.hln.be",
        isVisible: false,
        colors: ["Blue", "Yellow", "Green"],
        quote: "",
    },
    created: function () {
        this.getQuote();
    },
    methods: {
        getQuote: function () {
            const url = "https://api.chucknorris.io/jokes/random";
            //use the axios get method
            axios.get(url)
                .then(response => {
                    console.log(response.data.value);
                    this.quote = response.data.value;
                });
        },
    },
});