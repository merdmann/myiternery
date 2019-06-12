const { MongoShell } = require('mongodb-shell');
const mongoShell = new MongoShell('localhost:27017');
const result = await mongoShell.sendCommand({ in: 'foo=5' });
 
// result contains :
{
    out: "5",
    status: "SUCCESS"
}
mongoShell.destroy()

