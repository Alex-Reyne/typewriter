const sentence = "Hello! My name is Alex.\n";


const sayHello = function(sentence, timeout) {
  let newTime = 0

  for (const char of sentence) {
    newTime += timeout
    setTimeout(() => {
      process.stdout.write(char);
    }, newTime);
  }

}

sayHello(sentence, 200)