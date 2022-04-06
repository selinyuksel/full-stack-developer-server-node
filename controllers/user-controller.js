import people from './users.js';
let users = people;

// use express instance app to declare HTTP GET
// request pattern /api/users to call a function
const userController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser);
}


// function runs when /api/users requested
// responds with array of users
const findAllUsers = (req, res) => {
    const type = req.query.type;
    if(type) {
        res.json(findUsersByType(type));
        return;
    }
    res.json(users);
}

const findUsersByType = (type) => {
    const usersByType = users.filter(u => u.type === type);
    return usersByType;
}

const findUserById = (req, res) => {
    const userID = req.params.uid;
    const user = users.find(u => u._id === userID);
    res.json(user);
}

const createUser = (req, res) => {
    const newUser = req.body;
    newUser._id = (new Date()).getTime() + '';
    users.push(newUser);
    res.json(newUser);
}

const deleteUser = (req, res) => {
    const userId = req.params['uid'];
    users = users.filter(usr =>
        usr._id !== userId);
    res.sendStatus(200);
}

const updateUser = (req, res) => {
    const userId = req.params['uid'];
    const updatedUser = req.body;
    users = users.map(usr =>
        usr._id === userId ?
            updatedUser :
            usr);
    res.sendStatus(200);
}


export default userController;