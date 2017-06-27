(function($) {
  'use strict';

  var $accountDelete = $('#delete-account'),
    $accountDeleteDialog = $('#confirm-delete');

  $accountDelete.on('click', function() {
    $accountDeleteDialog[0].showModal();
  });

  $('#cancel').on('click', function() {
    $accountDeleteDialog[0].close();
  });

})(jQuery);