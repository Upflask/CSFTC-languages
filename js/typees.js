$(document).ready(function() {
   $("#file").change(function () 
   { 
     var ext = $('#file').val().split('.').pop().toLowerCase();
     if($.inArray(ext, ['png','jpg','jpeg','gif','webm','txt','mp4','wmv','mp3','ogg','zip','css','doc','docx','odt','pdf','ass','mkv','psd','flac']) == -1)
      {
    	alert('Este tipo de archivo no está permitido');
        location.reload();
} 
  }); 
});
