const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

// Define a custom route to retrieve data
server.get('/', (req, res) => {
  const data = router.db.get('./db.json').value();
  res.json(data);
});

// Define route to store data
server.post('/', (req, res) => {
  const { name, number } = req.body; 

  // Create a new entry
  const newEntry = {
    name,
    number
  };

  // Add the new entry to the 'contacts' resource in db.json
  router.db.get('contacts').push(newEntry).write();

  res.status(201).json(newEntry);
});

const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
