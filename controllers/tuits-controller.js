import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.avatarImage = "https://www.entrepreneurroadmap.ca/uploads/thumbnails/bookstack_1.jpg.2057ab45.jpg";
    newTuit.handle = 'late2Class';
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit.username = "selin";
    tuits.push(newTuit);
    res.json(newTuit);
}

const findAllTuits = (req, res) => res.json(tuits);

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    console.log("updated tuit: " + updatedTuit);
    tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    res.sendStatus(200);
}


const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

