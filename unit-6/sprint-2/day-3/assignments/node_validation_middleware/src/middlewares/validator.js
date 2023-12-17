// make the validator function and export it.
const fs=require("fs")

const validatorfunction=(req,res,next)=>{
    const {ID,Name,Rating,Description,Genre,Cast}=req.body

    if(!ID || !Name || !Rating || !Description || !Genre || !Cast)
    {
        return res.status(400).send("invalid request body.")
    }

    if(typeof ID!="number")
    {
        fs.appendFileSync("./res.txt", "bad request.some data is incorrect.\n")
        return res.status(400).send("bad request.some data is incorrect.")
    }else{
        fs.appendFileSync("./res.txt", "ID is a number\n")
    }

    if(typeof Name!="string" && isNaN(Name))
    {
        fs.appendFileSync("./res.txt", "bad request.some data is incorrect.\n")
        return res.status(400).send("bad request.some data is incorrect.")
    }else{
        fs.appendFileSync("./res.txt", "Name is a string\n")
    }

    if(typeof Description!="string")
    {
        fs.appendFileSync("./res.txt", "bad request.some data is incorrect.\n")
        return res.status(400).send("bad request.some data is incorrect.")
    }else{
        fs.appendFileSync("./res.txt", "Description is a string\n")
    }

    if(typeof Rating!="number")
    {
        fs.appendFileSync("./res.txt", "bad request.some data is incorrect.\n")
        return res.status(400).send("bad request.some data is incorrect.")
    }else{
        fs.appendFileSync("./res.txt", "Rating is a number\n")
    }

    if(typeof Genre!="string")
    {
        fs.appendFileSync("./res.txt", "bad request.some data is incorrect.\n")
        return res.status(400).send("bad request.some data is incorrect.")
    }else{
        fs.appendFileSync("./res.txt", "Genre is a string\n")
    }

    if(Array.isArray(Cast) && Cast.every((ele)=>{
        typeof ele=="string"
    }))
    {
        fs.appendFileSync("./res.txt", "bad request.some data is incorrect.\n")
        return res.status(400).send("bad request.some data is incorrect.")
    }else{
        fs.appendFileSync("./res.txt", "Cast is a array of string\n")
    }
    next()
}

// make the validator function and export it.

module.exports=validatorfunction
