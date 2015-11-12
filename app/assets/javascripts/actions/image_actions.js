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
};
