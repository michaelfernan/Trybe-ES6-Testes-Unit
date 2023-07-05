const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    
      const menu = { food: {}, drinks: {} };
      const restaurant = createMenu(menu);
      expect(restaurant).toHaveProperty('fetchMenu');
    });
  
    it('O valor da chave fetchMenu do objeto retornado é uma função', () => {
      const menu = { food: {}, drinks: {} };
      const restaurant = createMenu(menu);
      expect(typeof restaurant.fetchMenu).toBe('function');
    });
  
    it('O objeto retornado por fetchMenu possui as chaves food e drinks', () => {
      const menu = { food: {}, drinks: {} };
      const restaurant = createMenu(menu);
      const fetchedMenu = restaurant.fetchMenu();
      expect(fetchedMenu).toHaveProperty('food');
      expect(fetchedMenu).toHaveProperty('drinks');
    });
  
    it('O menu passado para createMenu é igual ao menu recuperado por fetchMenu', () => {
      const menu = {
        food: { coxinha: 3.90, sanduiche: 9.90 },
        drinks: { agua: 3.90, cerveja: 6.90 },
      };
      const restaurant = createMenu(menu);
      const fetchedMenu = restaurant.fetchMenu();
      expect(fetchedMenu).toEqual(menu);
    });
  
    it('A propriedade consumption retorna um array vazio', () => {
      const menu = { food: {}, drinks: {} };
      const restaurant = createMenu(menu);
      expect(restaurant.consumption).toEqual([]);
    });
  
    it('A função order retorna "Item indisponível" e não altera consumption para um item não existente', () => {
      const menu = { food: {}, drinks: {} };
      const restaurant = createMenu(menu);
      const result = restaurant.order('picanha');
      expect(result).toBe('Item indisponível');
      expect(restaurant.consumption).toEqual([]);
    });
  
    it('A função order adiciona o item ao array consumption para um item existente', () => {
      const menu = { food: { coxinha: 3.90 }, drinks: {} };
      const restaurant = createMenu(menu);
      restaurant.order('coxinha');
      expect(restaurant.consumption).toEqual(['coxinha']);
    });
  
    it('A função order aceita pedidos repetidos e os acrescenta a consumption', () => {
      const menu = { food: { coxinha: 3.90 }, drinks: {} };
      const restaurant = createMenu(menu);
      restaurant.order('coxinha');
      restaurant.order('coxinha');
      expect(restaurant.consumption).toEqual(['coxinha', 'coxinha']);
    });
  
    it('A função pay retorna a soma dos preços dos itens em consumption acrescida de 10%', () => {
      const menu = {
        food: { coxinha: 3.90, sanduiche: 9.90 },
        drinks: { agua: 3.90, cerveja: 6.90 },
      };
      const restaurant = createMenu(menu);
      restaurant.order('coxinha');
      restaurant.order('sanduiche');
      restaurant.order('agua');
      const total = 3.90 + 9.90 + 3.90;
      const expectedPay = total * 1.1;
      expect(restaurant.pay()).toBe(expectedPay);
    });
  });

