let rows=$('.timeline .timeline__row').toArray();
$('.select-year-list .form-select').on('change', function() {
    if (this.value==0) rows.forEach(element => { $(element).removeClass('hidden-option'); });
    else {
      for (let i=0;i<rows.length;i++){
        if ($(rows[i]).data('year')==this.value) $(rows[i]).removeClass('hidden-option');
        else $(rows[i]).addClass('hidden-option');
      }
    }
  });