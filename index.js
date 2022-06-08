(async () => {
    const db = require("./db");
    // console.log('Começou!');

    console.log('INSERT INTO CLIENTES');
    const result = await db.insertCustomer({nome_cli:"Natalia"});
    console.log(result);

    console.log('SELECT * FROM CLIENTES');
    const clientes = await db.selectCustomer();
    console.log(clientes);

    console.log('UPDATE CLIENTES');
    const result2 = await db.updateCustomer(6, {nome_cli: "Zé José"});
    console.log(result2);

    console.log('DELETE FROM CLIENTES');
    const result3 = await db.deleteCustomer(7);
    console.log(result3);


    //produtos
    console.log('INSERT INTO PRODUTOS');
    const result4 = await db.insertCustomer({nome_prod:"Pente"});
    console.log(result4);

    console.log('SELECT * FROM PRODUTOS');
    const produtos = await db.selectCustomer();
    console.log(produtos);

    console.log('UPDATE PRODUTOS');
    const result5 = await db.updateCustomer({nome_prod: "Escova de pentear"});
    console.log(result5);

    console.log('DELETE FROM PRODUTOS');
    const result6 = await db.deleteCustomer();
    console.log(result6);

    //pedidos

    console.log('INSERT INTO PEDIDOS');
    const result7 = await db.insertCustomer({quantidade_ped:1});
    console.log(result7);

    console.log('SELECT * FROM PEDIDOS');
    const pedidos = await db.selectCustomer();
    console.log(pedidos);

    console.log('UPDATE PEDIDOS');
    const result8 = await db.updateCustomer({quantidade_ped: 2});
    console.log(result8);

    console.log('DELETE FROM PEDIDOS');
    const result9 = await db.deleteCustomer();
    console.log(result9);

})()

module.exports = {selectCustomer, insertCustomer, updateCustomer, deleteCustomer}