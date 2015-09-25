/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  connections : {
    someMongodbServer: {
      adapter: 'sails-mongo',
      host: process.env.MONGO_PORT_27017_TCP_ADDR,
      port: process.env.MONGO_PORT_27017_TCP_PORT,
      //user: '',
      //password: '',
      database: process.env.MONGO_NAME,
    },
  },

  session: {
    adapter: 'mongo',
    host: process.env.MONGO_PORT_27017_TCP_ADDR,
    port: process.env.MONGO_PORT_27017_TCP_PORT,
    db: process.env.MONGO_NAME,
    collection: 'sessions',
    //username: '',
    //password: '',
  // auto_reconnect: false,
  // ssl: false,
  // stringify: true
  },


  /***************************************************************************
   * Set the default database connection for models in the production        *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

   models: {
     connection: 'someMongodbServer'
   },

  /***************************************************************************
   * Set the port in the production environment to 80                        *
   ***************************************************************************/

   port: 1337,

  /***************************************************************************
   * Set the log level in production environment to "silent"                 *
   ***************************************************************************/

   log: {
     level: "silly"
   }

};
