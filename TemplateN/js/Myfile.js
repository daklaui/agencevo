
$(document).ready( function () {
 


  var rowSelection = $('#demo-dt-selection').DataTable({
    "responsive": true,
    "language": {
        "paginate": {
          "previous": '<i class="demo-psi-arrow-left"></i>',
          "next": '<i class="demo-psi-arrow-right"></i>'
        }
    },
    "columnDefs": [
      { "width": "2%", "targets": 5 , "orderable": false}
    ]
  });
  
  $('#demo-dt-selection').on( 'click', 'tr', function () {
    if ( $(this).hasClass('selected') ) {
        $(this).removeClass('selected');
    }
    else {
        rowSelection.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
  } );
  


  // BUBBLE NUMBERS
    // =================================================================
 



});
