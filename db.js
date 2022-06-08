import { createConnection } from "mysql2/promise";
async function connect(){
    if(global.connetion && global.connetion.state !== 'disconnected')
        return global.connetion;
    
const connetion = await createConnection({
    host:'localhost',
    port: 3306,
    user: 'root',
    password: 'abcd0102',
    database: 'liraTecnologias'
});

console.log('Conectou no MySQL!');
global.connetion = connetion;
return global.connetion;
}


//clientes
async function selectCustomer(){
    const coon = await connect();
    const [rows] = await coon.query ('SELECT * FROM clientes;')
    return rows;
}

async function insertCustomer(customer){
    const coon = await connect();
    const sql = 'INSERT INTO clientes (nome_cli) VALUES (?);';
    const values = [customer.nome_cli];
    return await coon.query(sql,values)
}
async function updateCustomer(id_cli, customer){
    const conn = await connect();
    const sql = 'UPDATE clientes SET nome_ped=? WHERE id_cli=?';
    const values = [customer.nome_cli, id_cli];
    return await conn.query(sql, values);
}

async function updateCustomer(id_cli, customer){
    const conn = await connect();
    const sql = 'UPDATE clientes SET nome_ped=? WHERE id_cli=?';
    const values = [customer.nome_cli, id_cli];
    return await conn.query(sql, values);
}
async function deleteCustomer(id_cli){
    const conn = await connect();
    const sql = 'DELETE FROM clientes where id_cli=?;';
    return await conn.query(sql, [id_cli]);
}

//produtos

async function selectCustomer(){
    const coon = await connect();
    const [rows] = await coon.query ('SELECT * FROM pedidos;')
    return rows;
}

async function insertCustomer(customer){
    const coon = await connect();
    const sql = 'INSERT INTO clientes (nome_prod) VALUES (?);';
    const values = [customer.nome_prod];
    return await coon.query(sql,values)
}

async function updateCustomer(id_prod, customer){
    const conn = await connect();
    const sql = 'UPDATE produtos SET nome_prod=? WHERE id_prd?';
    const values = [customer.nome_prd, id_prod];
    return await conn.query(sql, values);
}

async function updateCustomer(id_prod, customer){
    const conn = await connect();
    const sql = 'UPDATE produtos SET nome_prod=? WHERE id_prod=?';
    const values = [customer.nome_prod, id_prod];
    return await conn.query(sql, values);
}
async function deleteCustomer(id_prod){
    const conn = await connect();
    const sql = 'DELETE FROM produtos where id_prod=?;';
    return await conn.query(sql, [id_prod]);
}


//pedidos

async function selectCustomer(){
    const coon = await connect();
    const [rows] = await coon.query ('SELECT * FROM pedidos;')
    return rows;
}

async function insertCustomer(customer){
    const coon = await connect();
    const sql = 'INSERT INTO pedidos (quantidade_ped) VALUES (?);';
    const values = [customer.quantidade_ped];
    return await coon.query(sql,values)
}

async function updateCustomer(id_ped, customer){
    const conn = await connect();
    const sql = 'UPDATE pedidos SET quantidade_ped=? WHERE id_ped=?';
    const values = [customer.quantidade_ped, id_ped];
    return await conn.query(sql, values);
}

async function updateCustomer(id_ped, customer){
    const conn = await connect();
    const sql = 'UPDATE pedidos SET quantidade_ped=? WHERE id_ped=?';
    const values = [customer.quantidade_ped, id_ped];
    return await conn.query(sql, values);
}
async function deleteCustomer(id_ped){
    const conn = await connect();
    const sql = 'DELETE FROM pedidos where id_ped=?;';
    return await conn.query(sql, [id_ped]);
}



 
module.exports = {selectCustomer, insertCustomer, updateCustomer, deleteCustomer}
