const express=require('express')
const app=express();
let book=[
    {id:"123",title:"beauty and the beast",year:1780,author:"jebj"},

]
app.post("/add",(req,res)=>
{ 
   res.status(201).json({ message: "Books added" })
})
app.get("/list",(req,res)=>
{  
    res.status(302).json({ message: book })

})
app.put("/update",(req,res)=>
 { 
  
    res.status(205).json({ message: "Books updated" })
})

app.delete("/delete",(req,res)=>
    { 
      
        res.status(404).json({ message: "No Books found" })
   })

app.listen(3000,()=>{
    console.log("listoning port is 3000");   
});