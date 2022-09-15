export const getCartPricingDetails = (cartList) => {
    const cartQty = cartList.reduce((prev, curr) => (prev += curr.qty), 0);
    const cartPrice = cartList.reduce((prev, curr) => (prev += (curr.originalPrice * curr.qty)), 0);
    const cartDiscount = cartList.reduce((prev, curr) => (prev += ((curr.originalPrice - curr.discountedPrice) * curr.qty)), 0);
    const cartTotal = cartPrice - cartDiscount;
    
    const cartDetails = {
        cartQty: cartQty,
        cartPrice: cartPrice,
        cartDiscount: cartDiscount,
        cartTotal: cartTotal
    }

    return ({ ...cartDetails });
}