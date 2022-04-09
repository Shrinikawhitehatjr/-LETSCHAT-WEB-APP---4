function send()
   {
         msg = document.getElementById("msg").value;
         firebase.database().ref(room_name).push({
           name:user_name,
           Message:msg,
           like:0
      });
      user_name
      room_name