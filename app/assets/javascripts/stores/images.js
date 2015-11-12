(function(root) {
var _images = {};

 var IMAGES_CHANGE = 'IMAGES_CHANGE';

 root.ImagesStore = $.extend({}, EventEmitter.prototype, {
   all: function() {
     return _images.slice(0);
   },

   artPieceById: function(imageId) {
     return _images[imageId.toString()] ? _images[imageId.toString()] : false;
   },

   addChangeListener: function(callback){
     this.on(IMAGES_CHANGE, callback);
   },

   removeChangeListener: function(callback){
     this.removeListener(IMAGES_CHANGE, callback);
   },

   updateImages: function(image) {
     _images[image.id.toString()] = image;
   },

   dispatcherID: AppDispatcher.register(function(payload){
     if(payload.actionType === ImageConstants.IMAGE_RECEIVED){
       ImagesStore.updateImages(payload.image);
       ImagesStore.emit(IMAGES_CHANGE);
     }
   })
 });
})(this);
