const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;


//middleware

app.use(cors());
app.use(express.json());




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.iz3zu0d.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        // make a collection name tasks
        const taskCollection = client.db("kRitetaskDB").collection("tasks");

        app.get("/taskCount", async (req, res) => {
            const count = await taskCollection.estimatedDocumentCount();
            res.send({count});

        })

        // read the data in the client site  from server site
        app.get("/task", async (req, res) => {
            const email = req.query.email;
            const query = { email: email }

            const result = await taskCollection.find(query).toArray();
            res.send(result);

        })

        
        // app.get("/alltask", async (req, res) => {
        //     const page = parent(req.query.page);
        //     const size = parent(req.query.size);
        //     const result = await taskCollection.find()
        //     .skip(page * size)
        //     .limit(size)
        //     .toArray();
        //     res.send(result);

        // })

        // insert data in the database where there is a collection named tasks
        app.post("/task", async (req, res) => {
            const taskItem = req.body;
        
            const result = await taskCollection.insertOne(taskItem)
            res.send(result);
        })

        app.get('/task/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) } 
            const result = await taskCollection.findOne(query);
            res.send(result);
        });


        app.put("/task/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const options = { upsert: true }
            const updatedTask = req.body;
            const Task = {
                $set: {
                    title: updatedTask.title,
                    description: updatedTask.description,
                    deadline: updatedTask.deadline,
                    category: updatedTask.category
                }
            }
            const result = await taskCollection.updateOne(filter, Task, options);
            res.send(result);

        })


        // delete task from database 
        app.delete("/task/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await taskCollection.deleteOne(query)
            res.send(result);
        })




        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);




app.get('/', (req, res) => {
    res.send('task management website server is running');
});

app.listen(port, () => {
    console.log(`task management  website server is running on port : ${port}`);
});