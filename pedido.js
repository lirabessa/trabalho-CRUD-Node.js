(async () => {
    const db = require("./db");
    console.log('Começou!');

    console.log('INSERT INTO PEDIDOS');
    const result = await db.insertCustomer({quantidade_ped:1});
    console.log(result);

    console.log('SELECT * FROM PEDIDOS');
    const pedidos = await db.selectCustomer();
    console.log(pedidos);

    console.log('UPDATE PEDIDOS');
    const result2 = await db.updateCustomer(6, {quantidade_ped: 2});
    console.log(result2);

    console.log('DELETE FROM PEDIDOS');
    const result3 = await db.deleteCustomer(7);
    console.log(result3);

})();