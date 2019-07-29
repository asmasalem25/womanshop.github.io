jQuery(document).ready(function ($) {
$('.toggle').click(function(e) {
    e.preventDefault();

  let $this = $(this);

  if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
  } else {
      $this.parent().parent().find('li .inner').removeClass('show');
      $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350); 
  }
});
$(".accordion").accordion({
    collapsible: true,
    active: parseInt(active_item),
    heightStyle: "content",
    icons: {
        "header": "ui-icon-plus",
        "activeHeader": "ui-icon-minus"
    }
});
});