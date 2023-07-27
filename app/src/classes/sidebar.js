export class Sidebar {
    constructor(selector) {
        this.$el = document.querySelector(selector)

        this.innit()
    }

        innit() {
            this.$el.insertAdjacentHTML('afterbegin', this.template)
        }

        get template() {
            return '<h1>template</h1>'
        }

}