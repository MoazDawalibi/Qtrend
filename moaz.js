


var cart = [
    {
        id:1,
        quntity:10,
        price:10
    },
    {
        id:2,
        price:20,
        quntity:2
    },
    {
        id:3,
        price:200,
        quntity:4
    },
    {
        id:4,
        price:120,
        quntity:7
    },
    {
        id:5,
        price:240,
        quntity:12
    }
]

function addProductToCart(product){

    const is_product_exists  = cart.find(productInCart => productInCart.id == product.id)
    console.log(is_product_exists);

    if(is_product_exists){

        cart = (cart.map(cartItem => {
            
            if(cartItem.id == product.id){
                cartItem.quntity  += product.quntity
            }

                return cartItem
        }));
    }else{
        cart = [...cart , product]
    }

    console.log(cart);
}






function getTotalPrice(){
    console.log(
        cart.reduce((total  ,cartItem) =>(
            total + cartItem.quntity * cartItem.price
        ),0)
    );
}

getTotalPrice()

























function deleteProductFromCart(productToDelete){

    const product = cart.find(cartItem => cartItem.id == productToDelete.id);

    if(product.quntity == 1){

        cart = cart.filter(cartItem => cartItem.id  != productToDelete.id);

    }else{
        cart =  cart.map(cartItem => {
            if(cartItem.id == productToDelete.id){
                cartItem.quntity -= productToDelete.quntity
            }
            return cartItem
        })
    }


}

// deleteProductFromCart({id:2 , quntity:10})





const stringFromBack = 'Top Quality Paper Prints in Qatar'

  const TextWordToArray = stringFromBack.split(' ')
  const TextWordLength = TextWordToArray.length
  const first_text = TextWordToArray.slice(0 , TextWordLength/2);
  const second_text = TextWordToArray.slice( TextWordLength/2 +1 , TextWordLength);

  console.log(second_text.join(' '));