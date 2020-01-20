class OrderService {

   async sendOrderToDB (userOrderInfo) {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));
        const orderTotal = JSON.parse(localStorage.getItem('orderTotal'))
        if( orderTotal < 1 ){
            return new Promise(( reject ) => {
                reject(new Error("CART IS EMPTY")) 
              });
        }
        const order = {
            orderItems:[],
            orderTotal: orderTotal,
            orderDetails: userOrderInfo
        };
        cartItems.map(item=>{
            const itemOrderArray = {
                name: item.name, 
                count: item.count,
                price: item.costInCredits
            };
            order.orderItems.push(itemOrderArray)
        })
        alert(JSON.stringify(order))

        // --- ORDER SEND TO SERVER ---- //
        return new Promise(( resolve ) => {
            setTimeout(() => resolve(true), 1000);  
          });
    }
}

export { OrderService }