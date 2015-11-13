var ApiActions = {
  receiveImageIds: function (imageIds) {
    AppDispatcher.dispatch({
      actionType: ImageConstants.IMAGE_IDS_CHANGE,
      imageIds: imageIds
    });
  },

  receiveImage: function (image) {
    AppDispatcher.dispatch({
      actionType: ImageConstants.IMAGE_RECEIVED,
      image: image
    });
  },

  changeArt: function (imageId) {
    AppDispatcher.dispatch({
      actionType: ImageConstants.CURRENT_IMAGE_CHANGE,
      newImage: imageId
    });
  },
};
