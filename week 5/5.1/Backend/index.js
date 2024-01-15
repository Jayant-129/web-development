const express = require("express");
const app = express();
const {createTodo , updateTodo} = require("./types");
const port = 3000;
const {todo} = require("./db");
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    console.log(createPayload);
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg : "You sent the wrong input",
        })
        return;
    }
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false,
    });
    res.status(200).json({
        msg : "todo created",
    });
    return;
});

app.get("/todos", async (req, res) => {
    const todos = await todo.find();
    res.json({
        todos,
    });
});

app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg : "You sent the wrong input",
        });
        return;
    }
    await todo.update({
        _id : req.body.id,
    }, { 
        completed : true
    })
    res.json({
        msg : "Todo marked as completed"
    })
});


app.listen(port, (req, res) => {
    console.log("hosting at local host 3000");
});