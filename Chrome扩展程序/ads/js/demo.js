$('div[class^="ad-"]').each(function() {
    var $this = $(this);
    console.log('remove', $this.attr('class'));
    $this.remove();
});