if ('serviceWorker' in navigator) {
  // navigator.serviceWorker.register('../sw.js')
  navigator.serviceWorker.register('https://github.com/nkhedr1/My_Portfolio/blob/master/sw.js')
  .then(function(registration) {
    console.log('Registration successful');
  })
  .catch(function(error) {
    console.log('Service worker registration failed');
  });
}

https://github.com/nkhedr1/My_Portfolio/blob/master/sw.js