if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../sw.js')
  .then(function(registration) {
    console.log('Registration successful');
  })
  .catch(function(error) {
    console.log('Service worker registration failed');
  });
}