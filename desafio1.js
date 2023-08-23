class ProductManager {
    constructor(){
        this.products = [];
    };

    getProducts(){
        console.log(this.products)
    }

    addProduct(title, description, thumbnail, code, stock=25){
        let newId;
        
        if(!title || !description || !thumbnail || !code || !stock){
            return console.log("Todos los campos son obligatorios")
        }
        if(this.products.some(product => product.code === code)){

            return console.log("Error: El producto ya existe")
        } 

        if(this.products.length==0){
            newId = 1
        } else {
            newId= this.products[this.products.length-1].id+1
        }
        //creamos el producto
        const newProduct= {
            id:newId,
            title,
            description,
            thumbnail,
            code,
            stock,

        }    
        
        this.products.push(newProduct)
        console.log("producto agregado")
            
        }    
    getProductById(id){
            const product = this.products.find(product => product.id === id)
            if(product){
                console.log(product)
            } else {
                console.log("Error: Not found")
            }
        }   
}    
        
const product1 = new ProductManager();

product1.addProduct("Estanteria","muebles de madera de pino","sin imagen","abc123")
product1.addProduct("Comoda","muebles de madera de cedro","sin imagen","a1b2c3",10)
product1.getProducts();
product1.addProduct("muebles de madera de cedro","sin imagen","3355aa",15)
product1.addProduct("producto prueba","Este es un producto prueba","sin imagen","abc123")
product1.getProductById(2)
product1.getProductById(5)
//"producto prueba"
//"Este es un producto prueba"
//="sin imagen"
//="abc123"