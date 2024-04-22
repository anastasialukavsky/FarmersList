class Cart{
    constructor(){
        this.products = []
        this.total = 0
    }
    addProduct (product){
       this.products.push(product)
       this.total += product.price
    }
    removeProduct(i){
        if(i >= 0 && i < this.products.length){
            const removeProduct = this.products.splice(i, 1)[0]
            this.total -=  removeProduct.price
        }
    }
}

module.exports = Cart