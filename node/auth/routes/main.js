const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('sync-mysql');
const env = require('dotenv').config({ path: "../../.env" });

var connection = new mysql({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/hello', (req, res) => {
    res.send('Hello World~!!')
})

// login
app.post('/login', (req, res) => {
    const { id, pw } = req.body;
    const result = connection.query("select * from user where userid=? and passwd=?", [id, pw]);
    // condole.log(result);
    if (result.length == 0) { //입력돤 결과가 없는 경우
        res.redirect('error.html')
    }
    if (id == 'admin' || id == 'root') { 
        console.log(id + " => Administrator Logined")
        res.redirect('member.html')
    } else {
        console.log(id + " => User Logined")
        res.redirect('main.html')

    }
})

// register
app.post('/register', (req, res) => {
    const { id, pw } = req.body;
    if (id == "") {   //id가 공백으로 뜰 경우
        res.redirect('register.html')
    } else { //입력은 됨
        let result = connection.query("select * from user where userid=?", [id]); //'let'으로 이미 한번 선언된 변수
        if (result.length > 0) { //내가 입력한 ID가 기존 존재할 경우
            res.writeHead(200); //HTML 태그작성 with ``
            var template = `
            <!doctype html>  
            <html>
            <head>
                <title>Error</title>
                <meta charset="utf-8">
            </head>
            <body>
                <div>
                    <h3 style="margin-left: 30px">Registrer Failed</h3>
                    <h4 style="margin-left: 30px">이미 존재하는 아이디입니다.</h4>
                    <a href="register.html" style="margin-left: 30px">다시 시도하기</a>
                </div>
            </body>
            </html>
           `;
            res.end(template);
        } else { //없는 경우
            result = connection.query("insert into user values (?, ?)", [id, pw]);
            console.log(result);
            res.redirect('/');
        }
    }
})

// request O, query X
app.get('/select', (req, res) => {
    const result = connection.query('select * from user');
    console.log(result);
    res.send(result);
})

// request O, query X
app.post('/select', (req, res) => {
    const result = connection.query('select * from user');
    console.log(result);
    res.send(result);
})

// request O, query O
app.get('/selectQuery', (req, res) => {
    const id = req.query.id;
    const result = connection.query("select * from user where userid=?", [id]);
    console.log(result);
    res.send(result);
})

// request O, query O
app.post('/selectQuery', (req, res) => {
    const id = req.body.id;
    // console.log(req.body);
    const result = connection.query("select * from user where userid=?", [id]);
    console.log(result);
    res.send(result);
})

// request O, query O
app.post('/insert', (req, res) => {
    const { id, pw } = req.body;
    const result = connection.query("insert into user values (?, ?)", [id, pw]);
    console.log(result);
    res.redirect('/selectQuery?id=' + req.body.id);
})

// request O, query O
app.post('/update', (req, res) => {
    const { id, pw } = req.body;
    const result = connection.query("update user set passwd=? where userid=?", [pw, id]);
    console.log(result);
    res.redirect('/selectQuery?id=' + req.body.id);
})

// request O, query O
app.post('/delete', (req, res) => {
    const id = req.body.id;
    const result = connection.query("delete from user where userid=?", [id]);
    console.log(result);
    res.redirect('/select');
})

module.exports = app;