const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const db = require('./db.json');
const fs = require('fs');
server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/login', (req, res, next) => {
    const users = readUsers();
    const user = users.filter(
        u => u.username === req.body.username && u.password === req.body.password
    )[0];

    if (user) {
        res.send({ ...formatUser(user), token: checkIfAdmin(user) });
    } else {
        res.status(401).send('Incorrect username or password');
    }
});

server.post('/register', (req, res) => {
    const users = readUsers();
    const user = users.filter(u => u.username === req.body.username)[0];
    if (user === undefined || user === null) {
        db.users.push(req.body);
        res.send({
            ...formatUser(req.body),
            token: checkIfAdmin(req.body)
        });
    } else {
        res.status(500).send('User already exists');
    }
});

server.use('/users', (req, res, next) => {
    if (isAuthorized(req) || req.query.bypassAuth === 'true') {
        next();
    } else {
        res.sendStatus(401);
    }
});
server.post('/policyadd', (req, res) => {
    // =======
        const users = readUsers();
    
        const user = users.filter(
            u => u.username === req.body.username && u.password === req.body.password
        )[0];
    
        if (user) {
            res.send({ ...formatUser(user), token: checkIfAdmin(user) });
        } else {
            res.status(401).send('Incorrect username or password');
        }
    });

server.post('/tokenadd', (req, res) => {
    db.policy.push(req.body);
    // const policylist= policyUsers();
    // const user = policylist.filter(u => u.username === req.body.username)[0];
    // if (user === undefined || user === null) {
    // res.send({
    // ...formatUser(req.body),
    // token: checkIfAdmin(req.body)
    // });
    // db.policy.push(req.body);
    // } else {
    // res.status(500).send('User already exists');
    // }
    });
server.use(router);
server.listen(3000, () => {
    console.log('JSON Server is running');
});

function formatUser(user) {
    delete user.password;
    user.role = user.username === 'admin'
        ? 'admin'
        : 'user';
    return user;
}
function policyUsers() {
    const dbRaw = fs.readFileSync('./data/db.json');
    const policydata = JSON.parse(dbRaw).listpolicy
    return policydata;
    }

function checkIfAdmin(user, bypassToken = false) {
    return user.username === 'admin' || bypassToken === true
        ? 'admin-token'
        : 'user-token';
}

function isAuthorized(req) {
    return req.headers.authorization === 'admin-token' ? true : false;
}

function readUsers() {
    const dbRaw = fs.readFileSync('./data/db.json');
    const users = JSON.parse(dbRaw).users
    return users;

 
}

function gettoken() {
    const dbRaw = fs.readFileSync('./data/db.json');
    const token = JSON.parse(dbRaw).token
    return token;
}

function viewdata() {
    const dbRaw = fs.readFileSync('./data/db.json');
    const viewdata = JSON.parse(dbRaw).viewdata
    return viewdata;
}

function listdata() {
    const dbRaw = fs.readFileSync('./data/db.json');
    const listdata = JSON.parse(dbRaw).listdata
    return listdata;
}
function hsmlistdata() {
    const dbRaw = fs.readFileSync('./data/db.json');
    const listdata = JSON.parse(dbRaw).hsmlistdata
    return listdata;
}
function keylistdata() {
    const dbRaw = fs.readFileSync('./data/db.json');
    const listdata = JSON.parse(dbRaw).keylistdata
    return listdata;
}

function adddata() {
    const dbRaw = fs.readFileSync('./data/db.json');
    const adddata = JSON.parse(dbRaw).adddata
    return adddata;
}

function editdata() {
    const dbRaw = fs.readFileSync('./data/db.json');
    const editdata = JSON.parse(dbRaw).editdata
    return editdata;
}

function auditlist() {
    const dbRaw = fs.readFileSync('./data/db.json');
    const auditlist = JSON.parse(dbRaw).auditlist
    return auditlist;
}

function accesdata() {
    const dbRaw = fs.readFileSync('./data/db.json');
    const accesdata = JSON.parse(dbRaw).accesdata
    return accesdata;
}

function accesslist() {
    const dbRaw = fs.readFileSync('./data/db.json');
    const accesslist = JSON.parse(dbRaw).accesslist
    return accesslist;
}
