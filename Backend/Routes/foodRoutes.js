const{fetchOrder,fetchSingleOrder,addOrder,deletingOrder,editOrder} =require("../Controller/foodController")

const router=require("express").Router()
//yo chai router ko object ho, ra jahilay ni use garnu parxa 

router.route("/booking").get(fetchOrder).post(addOrder)
router.route("/booking/:id").get(fetchSingleOrder).patch(editOrder).delete(deletingOrder)

module.exports=router 
