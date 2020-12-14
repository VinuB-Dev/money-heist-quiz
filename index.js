var readlineSync = require('readline-sync') //importing readline-sync
var score = 0 //variable to stror user score
const chalk = require('chalk')

console.log(chalk.red('Welcome to Money Heist Quiz!!'))
var username = readlineSync.question(chalk.blue('enter your name:\n'))
console.log(
  chalk.green(
    'Welcome ' + username + ", let's check how well you know money heist."
  )
)

var question1 = {
  question: 'Who said the famous words Bum Bum Ciao?\n',
  answer: 'Palermo',
}

var question2 = {
  question: 'How many raiders died in a robbery?\n',
  answer: '3',
}

var question3 = {
  question:
    'In the eighth episode of season 2, Monica asks Denver his real name. What name did he whisper to her?\n',
  answer: 'Ricardo',
}

var question4 = {
  question:
    'What was the password in the underground car park to capture Raquel from the police?\n',
  answer: 'Good morning',
}

var question5 = {
  question: 'Where did Raquel spot The Professor after the beginning heist?\n',
  answer: 'Philippines',
}

function quiz(question, answer) {
  var userAnswer = readlineSync.question(chalk.red(question))
  if (userAnswer.toLowerCase() == answer.toLowerCase()) {
    console.log(chalk.bgGreen('right!!'))
    score = score + 1
  } else {
    console.log(chalk.bgRed('wrong...'))
  }
}

question_list = [question1, question2, question3, question4, question5]

for (var i = 0; i < question_list.length; i++) {
  quiz(question_list[i].question, question_list[i].answer)
}
console.log('your score is:' + score)
