(async () => {
  const notificationTimeout = 1000 * 60 * 2;
  const body = document.querySelector('body');
  let granted = false;
  let notificationTimer = setTimeout(() => {
    if (!granted) return;
    showNotification();
  }, notificationTimeout);

  if (Notification.permission === 'granted') {
    granted = true;
  }

  if (Notification.permission !== 'denied'){
    granted = (await Notification.requestPermission()) === 'granted';
  }

  function showNotification() {
    new Notification('Lembre de usar nossa aplicação', {
      body: 'Venha fazer exercícios cognitivos',
      icon: './img.png'
    }).addEventListener('error', () => {
      alert('erro, usuário recusou as notificações');
    });
  }

  function resetNotificationTimer() {
    clearTimeout(notificationTimer);
    notificationTimer = setTimeout(() => {
      if (!granted) return;
      showNotification();
    }, notificationTimeout);
  }

  body.addEventListener('click', () => resetNotificationTimer());
})();
