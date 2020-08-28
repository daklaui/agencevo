$(document).on('nifty.ready', function () {
 
$.fn.DataTable.ext.pager.numbers_length = 5;
$('#demo-dt-basic').dataTable( {
    "responsive": true,
    "language": {
        "paginate": {
          "previous": '<i class="demo-psi-arrow-left"></i>',
          "next": '<i class="demo-psi-arrow-right"></i>'
        }
    }
} );

  // BUBBLE NUMBERS
    // =================================================================
 



});
