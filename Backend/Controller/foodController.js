const {foods} = require('../Database/connection')//importing the model
exports.fetchOrder = async function (req, res) {
    const datas = await foods.findAll()
    res.json({
        message: "fetched order successfully",
        datas
    })
}

exports.fetchSingleOrder = async function (req, res) {
    const id = req.params.id
   const meroOrder =  await foods.findByPk(id)
    res.json({
        message: "fetched single order sucessfully",
        meroOrder
    })
}

exports.addOrder = async function (req, res) {
    try{
        console.log("frontend bata aako data", req.body)
    const { C_id, C_name, C_order, C_price, C_address } = req.body//yo bhankeo destructuring gareko since 
    //req.body ma aru aru data ni aauna sakxa so afulai chiayeko data matrai use gareko 
     await foods.create({ 
        C_id, 
        C_name, 
        C_order,
        C_price,
        C_address
     })
    res.json({
        message: "order added sucessfully"
    })
    
} catch(err){
    console.error("error message",err)

    }
}
exports.deletingOrder = async function (req, res) {
    const id = req.params.id
    foods.destroy({
        where: {
            id
        }
    })
    res.json({
        message: "order deleted successfully"
    })
}

exports.editOrder = async function (req, res) {
    try {
        const id = req.params.id
        const { C_id, C_name, C_order, C_price, C_address } = req.body
        await foods.update({ C_id, C_name, C_order, C_price, C_address },
            {
                where: {
                    id
                }
            }
        )
        res.json({
            message: "order updated successfully"
        })

    }
    catch(err){
        res.json({
            message:"error coming"
        })
    }
}
