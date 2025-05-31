const foodModel =(sequelize,DataTypes)=>{
    const Order=sequelize.define("food",{
        C_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        C_name:{
            type:DataTypes.TEXT,
            allowNull:true,
            deafultValue:"nisha lamichhane"
        },
        C_order:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        
        C_price:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        C_address:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    })
    return Order
}
module.exports =foodModel
