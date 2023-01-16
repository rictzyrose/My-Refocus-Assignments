const dishes = {
  "dishID" : "ADB2022",
  "dishName" : "Adobo",
  "dishPrice" : 599,
  "ingredients" : []
}
dishes['ingredients'] = ['chicken', 'Vinegar', 'Garlic', 'Soy sauce', 'Onion', 'Black pepper'];

console.log(dishes);


//Task 2 

restaurantMenu = {
  "restaurantName": 'KennyRogers',
  "arr_dishes" : [ 
      {'dish_name': 'Grilled Chicken', 'dish_price':500, 'dish_ingredients' : 'Chicken, Garlic , Pepper, Lemon, Soysauce' },
      {'dish_name': 'Grilled Sausage', 'dish_price':500, 'dish_ingredients' : 'Sausage, Onions, pepper, olive oil  '},
      {'dish_name': 'Grilled Fish', 'dish_price':500, 'dish_ingredients' : 'fish, halibut, olive oil, black pepper'},
  ],
  "displayRestaurantName" : function () {
      console.log(this.restaurantName);
  },
  "displayMenu" : function () {
      console.log(this.arr_dishes);
  }
}
restaurantMenu.displayRestaurantName();
restaurantMenu.displayMenu();