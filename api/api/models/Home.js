/**
* Home.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },

    email: {
      type: 'email',
      required: true
    },

    ssn: {
      type: 'string',
      required: true,
    },
      
    municipality: {
      type: 'string',
      required: true
    },

    refugees: {
      type: 'integer'
    },

    months: {
      type: 'integer'
    },

    money: {
      type: 'integer'
    }
  } 
};

