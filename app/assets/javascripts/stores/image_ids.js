(function(root) {
var _imageIds = [];

 var IMAGE_IDS_CHANGE = 'IMAGE_IDS_CHANGE';

 root.ImageIdsStore = $.extend({}, EventEmitter.prototype, {
   all: function() {
     return _imageIds.slice(0);
   },

   first: function() {
     return _imageIds[0];
   },

   addChangeListener: function(callback){
     this.on(IMAGE_IDS_CHANGE, callback);
   },

   removeChangeListener: function(callback){
     this.removeListener(IMAGE_IDS_CHANGE, callback);
   },

   updateImageIds: function(imageIds) {
     _imageIds = imageIds;
   },

   dispatcherID: AppDispatcher.register(function(payload){
     if(payload.actionType === ImageConstants.IMAGE_IDS_CHANGE){
       ImageIdsStore.updateImageIds(payload.imageIds);
       ImageIdsStore.emit(IMAGE_IDS_CHANGE);
     }
   })
 });
})(this);
