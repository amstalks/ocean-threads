$('.modal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
  console.log('CLICKED')
})