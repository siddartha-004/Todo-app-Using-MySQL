
const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const PORT=3000
const mysql=require("mysql2")
const cors=require("cors")
const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Siddu@123",
    database:"demodb"

});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/api/get',(request,response)=>{
    const sqlGet="SELECT * FROM todo";
    db.query(sqlGet,(err,result)=>{
        response.send(result);
    })
});
app.get('/api/gethigh',(request,response)=>{
    const sqlGet="SELECT * FROM todo where category='High'";
    db.query(sqlGet,(err,result)=>{
        response.send(result);
    })
});
app.get('/api/getmedium',(request,response)=>{
    const sqlGet="SELECT * FROM todo where category='Medium'";
    db.query(sqlGet,(err,result)=>{
        response.send(result);
    })
});
app.get('/api/getlow',(request,response)=>{
    const sqlGet="SELECT * FROM todo where category='Low'";
    db.query(sqlGet,(err,result)=>{
        response.send(result);
    })
});
app.get('/api/gethigh1',(request,response)=>{
    const sqlGet="SELECT * FROM complete where category='High'";
    db.query(sqlGet,(err,result)=>{
        response.send(result);
    })
});
app.get('/api/getmedium1',(request,response)=>{
    const sqlGet="SELECT * FROM complete where category='Medium'";
    db.query(sqlGet,(err,result)=>{
        response.send(result);
    })
});
app.get('/api/getlow1',(request,response)=>{
    const sqlGet="SELECT * FROM complete where category='Low'";
    db.query(sqlGet,(err,result)=>{
        response.send(result);
    })
});

app.get('/api/getting',(request,response)=>{
    const sqlGett="SELECT * FROM complete";
    db.query(sqlGett,(err,result)=>{
        response.send(result);
    })
});
app.post('/api/post',(request,response)=>{
   const name=request.body.name;
   const category=request.body.category;
    const sqlInsert="INSERT INTO todo(name,category) VALUES(?,?)";
    db.query(sqlInsert,[name,category],(error,result)=>{
        if(error)
        {
            console.log(error);
        }
        response.send(result)
    })
})
app.post('/api/going',(request,response)=>{
    const name=request.body.name;
    const category=request.body.category;
     const sqlInsert="INSERT INTO complete(name,category) VALUES(?,?)";
     db.query(sqlInsert,[name,category],(error,result)=>{
         if(error)
         {
             console.log(error);
         }
         response.send(result)
     })
 })
 app.post('/api/goingn',(request,response)=>{
    const name=request.body.name;
    const category=request.body.category;
     const sqlInsert="INSERT INTO todo(name,category) VALUES(?,?)";
     db.query(sqlInsert,[name,category],(error,result)=>{
         if(error)
         {
             console.log(error);
         }
         response.send(result)
     })
 })
app.delete("/api/remove/:name",(request,response)=>{
    const name=request.params.name;

    const sqlRemove="DELETE FROM todo where name=?";
    db.query(sqlRemove,name,(error,result)=>{
        if(error)
        {
            console.log(error);
        }
    })
})
app.delete("/api/removing/:name",(request,response)=>{
    const name=request.params.name;

    const sqlRemove="DELETE FROM complete where name=?";
    db.query(sqlRemove,name,(error,result)=>{
        if(error)
        {
            console.log(error);
        }
    })
})
app.delete('/api/removeall',(request,response)=>{
    const sqlRemoveAll="DELETE FROM todo";
    db.query(sqlRemoveAll,(error,result)=>{
        if(error)
        {
            console.log(error);
        }
    })
})
 app.listen(PORT,()=>{
    console.log("server is running on 3000...")
 })

 