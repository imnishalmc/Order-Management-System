//password the supabse ->hellonisha123456bh

const { Sequelize, DataTypes } = require("sequelize");
//returns an object with Sequelize, DataTypes, and other exports.
const sequelize = new Sequelize(
  "postgresql://postgres.vejjhmpqeesppmearnsn:hellonisha123456bh@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
);

sequelize.authenticate()
.then(() => {
    console.log("sucessfull");
  })
.catch((err) => {
    console.log("error", err);
  });

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.foods=require("./models/foodModel")(sequelize, DataTypes);
//this is the man part 

sequelize.sync({ alter :true}).then(() => {
  console.log("this is used for creating the table");
})
module.exports = db;

//this foodmandu is so important because this is the model which we are going to use in the controller
