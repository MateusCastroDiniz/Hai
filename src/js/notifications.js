function getNotifications(){
    if( !("Notification" in window)){
      alert('Notificações não são suportadas pelo navegador')
    }else if( Notification.permission === 'granted'){
      const notify = new Notification('Bem vindo(a) de volta!')
    }else if( Notification.permission === 'denied'){
      Notification.requestPermission(function(permission){
        if(permission === 'granted'){
          const notify = new Notification('Seja bem vindo(a)!')
        }
      })
    }
  }