const listApp = () => ({
    welcomeMsg: 'Hello World!',
    items: [],
    item: '',
    addItem(e) {
        e.preventDefault();
        //if the value isn't null
        //then get the old value and clear it out
        if(this.item) {
            this.items.push(this.item)
        } 
    },
    remove(item) {
        //filter through the items to remove item based on id
        this.items.splice(this.items.indexOf(item), 1)
    },
    edit(item){
        item.editing = true;
        // this.$root.querySelector('.item_edit').focus();
    }
})
