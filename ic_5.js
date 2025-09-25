// In Class Coding Challenge - Sept 24

// Esports Arena catalog (price per unit)
const products = [
  { id: 201, name: "Pro Mouse (wired)",   category: "gear",    price: 39.99 },
  { id: 202, name: "Team Jersey",         category: "apparel", price: 49.5  },
  { id: 203, name: "Energy Drink 6-pack", category: "snacks",  price: 12.0  },
  { id: 204, name: "Arena Day Pass",      category: "access",  price: 15.0  },
  { id: 205, name: "Switchable Keycaps",  category: "gear",    price: 19.0  }
];

// Example cart (product & quantity)
const cart = [
  { productId: 202, qty: 1 },
  { productId: 203, qty: 2 },
  { productId: 204, qty: 1 },
  { productId: 205, qty: 1 }
];

// Try: "regular", "student", "member", or "vip"
const customerType = "member";

//Task 1. Apply Category Discounts

function getCategoryDiscount(category) {
switch (category) {
    case "gear":
        return .1  // could also do return 0.9 --> would mean the same thing 10% discount
        break;
    case "apparel":
        return .15
        break;
        case "snacks":
            return .92
            break;
        case "access":
            return 0.95
            break;
    default:
        return 0
        break;
    }
}
console.log(getCategoryDiscount("gear"));

//Task 2. get Price After Discounts
function priceAfterCategoryDiscount (product) {
    let rate = getCategoryDiscount(product.category);
    return product.price * (1-rate);    
}
console.log(priceAfterCategoryDiscount(products[0]));

// Task 3. Search Product
function findProductById(id) {
    for (let p of products) 
        if (p.id === id) {
            return p;
        }
    }

    return null;

// Task 4. 
function lineItemTotal(cartItem) {
    findProductById (id)
    priceAfterCategoryDiscount (category)
        if (qty > 0) {
            return qty * discountedUnitPrice;
        }
return 0;
    }

// Task 5. 
