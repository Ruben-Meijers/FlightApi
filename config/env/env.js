var env = {
    webPort: process.env.PORT || 3001,
    dbHost: process.env.DB_HOST || 'ds121371.mlab.com',
    dbPort: process.env.DB_PORT || '21371',
    dbUser: process.env.DB_USER || 'admin',
    dbPassword: process.env.DB_PASSWORD || 'passw0rd',
    dbDatabase: process.env.DB_DATABASE || 'flight'
}

var dburl = process.env.NODE_ENV === 'production' ?
    'mongodb://' + env.dbUser + ':' + env.dbPassword + '@' + env.dbHost + ':' + env.dbPort + '/' + env.dbDatabase :
    'mongodb://localhost/' + env.dbDatabase

module.exports = {
    env: env,
    dburl: dburl
};