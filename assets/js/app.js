$(document).ready(function() {

  $('.list').click(function() {
    const value = $(this).attr('data-filter');
    if(value == 'All') {
      $('.item-box').show('1000');
    } else {
      $('.item-box').not('.' + value).hide('1000');
      $('.item-box').filter('.' + value).show('1000');
    }
  });

  // Add active class on click list and remove active class from siblings
  $('.list').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  });

});