const express = require('express');
const router = express.Router();

const firebaseAdminDb = require('../connections/firebase_admin');
const todosRef = firebaseAdminDb.ref('todos');

/*
  get
*/
router.get('/todos', (req, res) => {
  todosRef.once('value').then(snapshot => {
    res.send({
      success: true,
      results: snapshot.val(),
    })
  })
})

router.get('/todo/:id', (req, res) => {
  const { id } = req.params;
  todosRef.child(id).once('value').then(snapshot => {
    res.send({
      success: true,
      result: snapshot.val(),
    })
  })
})

/*
  post
*/
router.post('/todo', (req, res) => {
  const todoRef = todosRef.push();
  const key = todoRef.key;
  const todo = {
    content: req.body.content,
    isCompleted: false,
    id: key,
  };
  todoRef.set(todo).then(() => {
    todosRef.once('value').then(snapshot => {
      res.send({
        success: true,
        results: snapshot.val(),
        message: "新增成功",
      });
    });
  });
})

router.post('/todo/:id', (req, res) => {
  const { id } = req.params;
  const todo = {
    content: req.body.content,
    isCompleted: req.body.isCompleted,
    id,
  };
  todosRef.child(id).update(todo).then(() => {
    todosRef.once('value').then(snapshot => {
      res.send({
        success: true,
        results: snapshot.val(),
        message: "更新成功",
      })
    })
  })
})

/*
  delete
*/
router.delete('/todo/:id', (req, res) => {
  const { id } = req.params;
  todosRef.child(id).remove().then(() => {
    todosRef.once('value').then(snapshot => {
      res.send({
        success: true,
        results: snapshot.val(),
        message: "刪除成功",
      });
    })
  })
})

module.exports = router;
