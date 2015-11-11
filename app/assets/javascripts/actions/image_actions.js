var ApiActions = {
  receiveImageIds: function (imageIds) {
    AppDispatcher.dispatch({
      actionType: ImageConstants.IMAGE_IDS_CHANGE,
      imageIds: imageIds
    });
  },
};
