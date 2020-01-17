class OrderService {

   async sendOrderToDB (userOrderInfo) {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));
        const orderTotal = JSON.parse(localStorage.getItem('orderTotal'))
        if( orderTotal < 1 ){
            return new Promise(( reject ) => {
              reject(new Error("CART IS EMPTY")) 
              });
        }
        let order = [[], [], []];
        cartItems.map(item=>{
            let itemOrderArray = {
                name: item.name, 
                count: item.count,
                price: item.costInCredits
            };
            order[0].push(itemOrderArray)
        })
        order[1].push(orderTotal);
        order[2].push(userOrderInfo)
        alert(JSON.stringify(order))

        // --- ORDER SEND TO SERVER ---- //
        return new Promise(( resolve ) => {
            setTimeout(() => resolve(true), 1000);  
          });
    }
}

export { OrderService }