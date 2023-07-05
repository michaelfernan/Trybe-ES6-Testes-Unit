/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (menu) => {
    const fetchMenu = () => menu;
  
    const order = (item) => {
      if (!menu.food[item] && !menu.drinks[item]) {
        return "Item indisponível";
      }
      consumption.push(item);
    };
  
    const pay = () => {
      let total = 0;
      for (const item of consumption) {
        if (menu.food[item]) {
          total += menu.food[item];
        } else if (menu.drinks[item]) {
          total += menu.drinks[item];
        }
      }
      return total * 1.1;
    };
  
    const consumption = [];
  
    return {
      fetchMenu,
      consumption,
      order,
      pay,
    };
  };
  
  module.exports = createMenu;  
