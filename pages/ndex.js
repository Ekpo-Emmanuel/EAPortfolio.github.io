
function OpenNav() {
  document.getElementById("myNav").style.width = "80%";
};

function CloseNav() {
  document.getElementById("myNav").style.width = "0%";
};
  


 $(document).ready(function(){
   $('.tablink').click(function(){
     const value = $(this).attr('data-filter');
     if (value === 'All')
     {
       $('.row_cont').show('5000');
     }
     else
     {
        $('.row_cont').not('.'+value).hide('2000');
        $('.row_cont').filter('.'+value).show('5000');
     }
   })

   $('.tablink').click(function(){
     $(this).addClass('active1').siblings().removeClass('active1')
   })
 })
