import Alpine from "alpinejs";
Alpine.data("myComponent", function (initiale = 0) {
    return {
        compteur: initiale,
        increment() {
            this.compteur += 1;
        },
        decrement() {
            this.compteur -= 1;
            if (this.compteur < 0) {
                this.$el.style.display = "none";
            }
        }
    };
});
