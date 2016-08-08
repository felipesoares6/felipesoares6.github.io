  // Hide Nav on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('nav').outerHeight();

    $(window).scroll(function(event){
      didScroll = true;
    });

    setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
    }, 100);

    function hasScrolled() {
      var st = $(this).scrollTop();

      if(Math.abs(lastScrollTop - st) <= delta)
          return;
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('nav').removeClass('nav-down').addClass('nav-up');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('nav').removeClass('nav-up').addClass('nav-down');
          }
      }

      lastScrollTop = st;
    }

  /* scroll suave */
  var $doc = $('html, body');
  $('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 600);
    return false;
  });

  /* envio do formulario */
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
