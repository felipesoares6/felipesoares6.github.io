$(function(){
  $('#formulario').on('submit', function(e){
    e.preventDefault();
    var $nome = $('#nome');
    var $email = $('#email');
    var $mensagem = $('#mensagem');

    alert('Email enviado com sucesso!');

    $nome.val('');
    $email.val('');
    $mensagem.val('');
  });
});
