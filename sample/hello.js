var yourName = ''

function isName(yourName){
  if(yourName.length != 0){
    return " "+yourName;
  } else {
    return yourName;
  }
}


var greeting = {
  fn: 'Steven',
  ln: 'Aldous',
  hp: '. I hope to speak with you about the exciting opportunities at ',
  cm: 'Toptal',
  salutation: function(yourName){
    return 'Hello' + isName(yourName) +
    ', nice to meet you! My name is ' +
    this.fn + ' ' + this.ln +
    this.hp + this.cm + '!';
  }
};

console.log(greeting.salutation(yourName))