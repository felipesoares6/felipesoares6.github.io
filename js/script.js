$(function(){
  var $doc = $('html, body');
  $('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });
  $('#formulario').on('submit', function(e){
    var $nome = $('#nome');
    var $email = $('#email');
    var $mensagem = $('#mensagem');
    if($nome.val() == '' || $email.val() == '' || $mensagem.val() == ''){
      e.preventDefault();
      alert('Todos os campos devem ser preenchidos!');
    }else{
      $.ajax({
          method: 'POST',
          url: '//formspree.io/felipeluizsoares@gmail.com',
          data: $('#formulario').serialize(),
          datatype: 'json'
        });
        e.preventDefault();
        alert('Email enviado com sucesso!');
        $(this).get(0).reset();
    }
  });
});
