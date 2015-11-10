jQuery( function ($) {
  $('#list > ul').columnizeList({
    columns: 2,
    wrapper_class: 'columnizedList',
    nested_item_class: 'nestedItem'
  });
});
