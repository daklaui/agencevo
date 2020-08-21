$(document).on('nifty.ready', function () {
 
    $("#demo-gallery").unitegallery();
    
    
  /******* */
    
  Dropzone.options.demoDropzone = { // The camelized version of the ID of the form element
    // The configuration we've talked about above
    autoProcessQueue: false,
    //uploadMultiple: true,
    //parallelUploads: 25,
    //maxFiles: 25,

    // The setting up of the dropzone
    init: function() {
    var myDropzone = this;
    //  Here's the change from enyo's tutorial...
    //  $("#submit-all").click(function (e) {
    //  e.preventDefault();
    //  e.stopPropagation();
    //  myDropzone.processQueue();
        //
    //}
    //    );

    }

   
}



// DROPZONE.JS WITH BOOTSTRAP'S THEME
// =================================================================
// Require Dropzone
// http://www.dropzonejs.com/
// =================================================================
// Get the template HTML and remove it from the doumenthe template HTML and remove it from the doument
var previewNode = document.querySelector("#dz-template");
previewNode.id = "";
var previewTemplate = previewNode.parentNode.innerHTML;
previewNode.parentNode.removeChild(previewNode);

var uplodaBtn = $('#dz-upload-btn');
var removeBtn = $('#dz-remove-btn');
var myDropzone = new Dropzone(document.body, { // Make the whole body a dropzone
    url: "/target-url", // Set the url
    thumbnailWidth: 50,
    thumbnailHeight: 50,
    parallelUploads: 20,
    previewTemplate: previewTemplate,
    autoQueue: false, // Make sure the files aren't queued until manually added
    previewsContainer: "#dz-previews", // Define the container to display the previews
    clickable: ".fileinput-button" // Define the element that should be used as click trigger to select files.
});


myDropzone.on("addedfile", function(file) {
    // Hookup the button
    uplodaBtn.prop('disabled', false);
    removeBtn.prop('disabled', false);
});

// Update the total progress bar
myDropzone.on("totaluploadprogress", function(progress) {
    $("#dz-total-progress .progress-bar").css({'width' : progress + "%"});
});

myDropzone.on("sending", function(file) {
    // Show the total progress bar when upload starts
    document.querySelector("#dz-total-progress").style.opacity = "1";
});

// Hide the total progress bar when nothing's uploading anymore
myDropzone.on("queuecomplete", function(progress) {
    document.querySelector("#dz-total-progress").style.opacity = "0";
});


// Setup the buttons for all transfers
uplodaBtn.on('click', function() {
    //Upload all files
    //myDropzone.enqueueFiles(myDropzone.getFilesWithStatus(Dropzone.ADDED));
});

removeBtn.on('click', function() {
    myDropzone.removeAllFiles(true);
    uplodaBtn.prop('disabled', true);
    removeBtn.prop('disabled', true);
});



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

$('#demo-step-wz').bootstrapWizard({
    tabClass		: 'wz-steps',
    nextSelector	: '.next',
    previousSelector	: '.previous',
    onTabClick: function(tab, navigation, index) {
        return false;
    },
    onInit : function(){
        $('#demo-step-wz').find('.finish').hide().prop('disabled', true);
    },
    onTabShow: function(tab, navigation, index) {
        var $total = navigation.find('li').length;
        var $current = index+1;
        var $percent = (index/$total) * 100;
        var wdt = 100/$total;
        var lft = wdt*index;
        var margin = (100/$total)/2;
        $('#demo-step-wz').find('.progress-bar').css({width:$percent+'%', 'margin': 0 + 'px ' + margin + '%'});


        // If it's the last tab then hide the last button and show the finish instead
        if($current >= $total) {
            $('#demo-step-wz').find('.next').hide();
            $('#demo-step-wz').find('.finish').show();
            $('#demo-step-wz').find('.finish').prop('disabled', false);
        } else {
            $('#demo-step-wz').find('.next').show();
            $('#demo-step-wz').find('.finish').hide().prop('disabled', true);
        }
    }
});