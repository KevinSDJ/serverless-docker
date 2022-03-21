function holamundo(event,context,callback){
    console.log(event)
    console.log(context)
    let response={
        status:200,
        body:JSON.stringify({message:"oh oh yeesss"})}
    callback(null,response)
}
module.exports={holamundo}
