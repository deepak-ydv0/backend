import express from 'express'
// import dotenv = 
 
const app = express()
const port = process.env.PORT || 3000



app.get('/',(req,res)=>{
    res.send("Hello ")
})

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:"A joke",
            content:'This is joke'
        },
        
        {
            id:2,
            title:"Another joke",
            content:'This is another joke'
        },
        {
            id:2,
            title:"A 3rd joke",
            content:'This is 3rd joke'
        },
        {
            id:4,
            title:"A 4th joke",
            content:'This is 4th joke'
        },
    ]

    res.send(jokes)
})


app.listen(port,()=>{
    console.log(`server is listen on ${port}`);
})