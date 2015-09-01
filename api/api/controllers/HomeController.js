/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {
  statistics: function(req, res) {
    var data = {};

    Home.find().sum('refugees').exec(function(err, total){
      console.log('Total refugees:', total);
      data.totalRefugees = total;
      
      Home.find().sum('money').exec(function(err, total){  
        console.log('Total money:', total);
        data.totalMoney = total;

        res.send(data);
      });  
    }); 
  },	

  forbidden: function(req, res) {
    
    res.forbidden();
  }   
};

