(async () => {
    const db = require("./db");
    console.log('Começou!');

    console.log('INSERT INTO PRODUTOS');
    const result = await db.insertCustomer({nome_prod:"Pente"});
    console.log(result);

    console.log('SELECT * FROM PRODUTOS');
    const produtos = await db.selectCustomer();
    console.log(produtos);

    console.log('UPDATE PRODUTOS');
    const result2 = await db.updateCustomer(6, {nome_prod: "Escova de pentear"});
    console.log(result2);

    console.log('DELETE FROM PRODUTOS');
    const result3 = await db.deleteCustomer(7);
    console.log(result3);

})();