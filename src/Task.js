const taskDB = require('./tasksDB')
const {v4: uuidV4} = require('uuid')

class Task {

  static tasks = [...taskDB]

  static Get(req, res) {
    return res.json(Task.tasks)
  }

  static Post(req, res) {
    const {body} = req
    const task = {...body, id: uuidV4()}
    Task.tasks = [...Task.tasks, {...task}]
    return res.status(201).json(task)
  }

  static Put(req, res) {
    const {body, params} = req
    const {id} = params
    Task.tasks = [...Task.tasks].map(task => task.id === id ? {...task, ...body} : task)
    return res.json(Task.tasks)
  }

  static Delete(req, res) {
    const {params} = req
    const {id} = params
    Task.tasks = [...Task.tasks].filter(task => task.id !== id)
    return res.status(204).send()
  }

  static GetById(req, res) {
    const {params} = req
    const {id} = params
    const taskFound = [...Task.tasks].find(task => task.id === id)
    if (!!taskFound) return res.json(taskFound)
    else return res.status(404).send()
  }

}

module.exports = Task
