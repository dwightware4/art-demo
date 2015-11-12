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

  fetchImage: function(imageId) {
    $.ajax({
      url: 'https://appsheettest1.azurewebsites.net/sample/art/' + imageId,
      dataType: 'json',

      success: function(image) {
        ApiActions.receiveImage(image);
      }
    });
  },
};
