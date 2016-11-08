// A very simple OOP that randomly picks a message from an array then posts to the html when the magic 8ball image is clicked.
var magic8 = {
  // array
  messages: [
    'Nope. Not worth it.',
    'Yes! This will happen!',
    'Are you sure you want to do this?',
    'I see troubles ahead. Beware!',
    'I see a dark void inside your head. You should get that fixed.',
    'I wouldn\'t bother if I were you.',
    'So... much... haze... try again later.',
    'You can but I wouldn\'t.',
    'Let me crack open this fortune cookie first... your lucky number is 8!',
    'Poke me like that again and your future will be very grim!',
    'I see nothing... oh wait! Never buy a pigeon.',
    'This will end poorly for you.',
    'Your heart will break. Sorry.',
    'A fool and his money will soon be parted. Leave $10 and go away.',
    'I\'d predicate something nice for you but let\'s be reasonable.',
    'I can but you shouldn\'t.',
    'This is your lucky day! Do it!',
    'I feel an energy buzzing about you. This is your day!'
],
  //method called by the onclick in the img tag
  displayMessage: function() {
    var display = document.querySelector('img');
    display.addEventListener('click', function(event) {
    var num = Math.floor(Math.random() * (magic8.messages.length));
    console.log(magic8.messages[num]);
    var displayMessage = document.getElementById('magic8ballMessage');
    displayMessage.innerHTML = magic8.messages[num];
    });
  }

};
