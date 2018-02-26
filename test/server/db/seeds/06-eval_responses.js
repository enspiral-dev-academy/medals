exports.seed = (knex, Promise) => {
  return knex('eval_responses').insert([
    {id: 1, question_id: 1, response: 'Grace Hopper', reason: 'Grace helped develop COBOL.', key: false},
    {id: 2, question_id: 1, response: 'Brendan Eich', reason: 'He created JavaScript in 10 days.', key: true},
    {id: 3, question_id: 1, response: 'Tim Berners-Lee', reason: 'Tim created HTML.', key: false},
    {id: 4, question_id: 1, response: 'Guido van Rossum', reason: 'Guido is responsible for Python.', key: false},
    {id: 5, question_id: 2, response: 'Express', reason: 'Express.js is used for routing.', key: false},
    {id: 6, question_id: 2, response: 'Handlebars', reason: 'Handlebars is used for creating server-side templates.', key: false},
    {id: 7, question_id: 2, response: 'React', reason: 'That\'s right. It\'s a local copy of the HTML DOM.', key: true},
    {id: 8, question_id: 2, response: 'Knex', reason: 'Sorry, Knex is an SQL query builder.', key: false}
  ])
}
