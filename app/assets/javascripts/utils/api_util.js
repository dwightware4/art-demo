ApiUtil = {
  fetchImageIds: function() {
    $.ajax({
      url: 'https://appsheettest1.azurewebsites.net/sample/art',
      dataType: 'json',

      success: function(imageIds) {
        ApiActions.receiveImageIds(imageIds);
      }
    });
  },
};
