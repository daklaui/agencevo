import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-ajouter-tarif-form',
  templateUrl: './ajouter-tarif-form.component.html',
  styleUrls: ['./ajouter-tarif-form.component.css']
})
export class AjouterTarifFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('#demo-cls-wz').bootstrapWizard({
      tabClass		: 'wz-classic',
      nextSelector	: '.nextB',
      previousSelector	: '.previousB',
      onTabClick: function(tab, navigation, index) {
          return false;
      },
      onInit : function(){
          $('#demo-cls-wz').find('.finishB').hide().prop('disabled', true);
      },
      onTabShow: function(tab, navigation, ind) {
          var $total1 = navigation.find('.li').length;
          var $current1 = ind+1;
          var $percent1 = ($current1/$total1) * 100;
          var wdt1 = 100/$total1;
          var lft = wdt1*ind;
          $('#demo-cls-wz').find('.progress-striped').find('.progress-bar').css({width:$percent1+'%'});

          // If it's the last tab then hide the last button and show the finish instead
          if($current1 >= $total1) {
              $('#demo-cls-wz').find('.nextB').hide();
              $('#demo-cls-wz').find('.finishB').show();
              $('#demo-cls-wz').find('.finishB').prop('disabled', false);
            
          } else {
              $('#demo-cls-wz').find('.nextB').show();
              $('#demo-cls-wz').find('.finishB').hide().prop('disabled', true);
          }
      }
  });

  }
  

}
