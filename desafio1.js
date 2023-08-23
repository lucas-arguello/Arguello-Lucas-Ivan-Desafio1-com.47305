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

            return console.log("El producto ya existe")
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
        if(this.products.length==0){
            newId = 1
        } else {
            newId= this.products[this.products.length-1].id+1
        }

        this.products.push(newProduct)
        console.log("producto agregado")
            
        }    
    getProductById(id){
            const product = this.products.find(product => product.id === id)
            if(product){
                console.log(product)
            } else {
                console.log("Not found")
            }
        }   
}    
        
const producto1 = new ProductManager();

producto1.addProduct("estanteria","muebles de madera de pino","sin imagen","abc123")
producto1.getProducts();
producto1.addProduct("producto prueba","Este es un producto prueba","sin imagen","abc123")
producto1.getProducts();

//"producto prueba"
//"Este es un producto prueba"
//="sin imagen"
//="abc123"