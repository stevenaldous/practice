var your_name = ''

function isName(your_name){
  if(your_name.length != 0){
    return " "+your_name;
  } else {
    return your_name;
  }
}


var greeting = {
  fn: 'Steven',
  ln: 'Aldous',
  hp: '. I hope to speak with you about the exciting opportunities at ',
  cm: 'Toptal',
  salutation: function(your_name){
    return 'Hello' + isName(your_name) +
    ', nice to meet you! My name is ' +
    this.fn + ' ' + this.ln +
    this.hp + this.cm + '!';
  }
};

console.log(greeting.salutation(your_name))