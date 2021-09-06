const app = require('./app');
const database = require('./database');

app.listen(app.get('port'), () => {
    database();
    console.log(`>>> Server On Port ${app.get('port')}`);
    console.log('>>> DB is Connected');

})