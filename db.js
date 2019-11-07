const { JsonDB } = require('node-json-db');
const { Config } = require('node-json-db/dist/lib/JsonDBConfig');

var db = new JsonDB(new Config('notesDB', true, true, '/'));
console.log('Database: notesDB initialized');

module.exports = {
    push: (id, data) => db.push(`/${id}`, data),
    get: () => Object.values(db.getData('/')),
    delete: id => db.delete(`/${id}`)
};
