

function send() {
   var input_msg = document.getElementById('msg_text').value; 
   var tab = document.getElementById('tab'); 

   if (input_msg != '') {
      var new_msg = document.createElement('div'); 
      new_msg.setAttribute('class', 'msg'); 
      var newId = generateUniqueId(); 
      new_msg.setAttribute('id', newId); 
      tab.appendChild(new_msg);

      var msg_box = document.getElementById(newId);
      var msg_text = document.createElement('span'); 
      msg_text.innerText = input_msg; 
      msg_box.appendChild(msg_text);

      const user_msg = input_msg;  
      document.getElementById('msg_text').value = ''; 

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
         if (this.readyState == 4 && this.status == 200) {
       
            const responseData = JSON.parse(xhttp.responseText);
            const answerValue = responseData.answer;
            console.log(answerValue);

            var ai_msg = document.createElement('div');
            ai_msg.setAttribute('class', 'msg1');
            var newId = generateUniqueId(); 
            ai_msg.setAttribute('id', newId);
            console.log(newId);
            tab.appendChild(ai_msg);

            var ai_msg_box = document.getElementById(newId);
            var ai_msg_text = document.createElement('span');
            ai_msg_text.innerText = answerValue;
            ai_msg_box.appendChild(ai_msg_text);
         }
         tab.scrollTop = tab.scrollHeight;
      };
      xhttp.open("POST", "https://chatgpt.apinepdev.workers.dev/?question=" + user_msg, true);
      xhttp.send();
   }



   function generateUniqueId() {
      return 'id_' + Math.random().toString(36).substr(2, 9); 
   }
}

function insta() {
<<<<<<< HEAD
   location = 'https://www.instagram.com/hailemichael/';
}
=======
   location = 'https://www.instagram.com/c0denet/';
}
>>>>>>> 44fd850f41efdb0f9a377010bcfa1a0b424e8af8
