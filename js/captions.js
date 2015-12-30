$(document).ready(function() {
  var counter = 0;

  $('caption').each(
    function() {
      ++counter;
      this.id = 'table-' + counter;
    }
  );
}
