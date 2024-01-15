const {z} = require("zod");
/* 
    {
        title : string,
        description : string,
    }

    {
        id : string,
    }

*/

const createtodo = z.object(
    {
        title : z.string(),
        description : z.string(),
    }
);

const updatetodo = z.object({
    id : z.string(),
});

module.exports = {
    createTodo : createtodo,
    updateTodo : updatetodo,
};