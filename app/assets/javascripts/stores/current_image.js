(function(root) {
var _currentImage = 0;

 var CURRENT_IMAGE_CHANGE = 'CURRENT_IMAGE_CHANGE';

 root.CurrentImageStore = $.extend({}, EventEmitter.prototype, {
   currentImage: function() {
     return _currentImage;
   },

   addChangeListener: function(callback){
     this.on(CURRENT_IMAGE_CHANGE, callback);
   },

   removeChangeListener: function(callback){
     this.removeListener(CURRENT_IMAGE_CHANGE, callback);
   },

   updateCurrentImage: function(newImage) {
     _currentImage = newImage;
   },

   dispatcherID: AppDispatcher.register(function(payload){
     if(payload.actionType === ImageConstants.CURRENT_IMAGE_CHANGE){
       CurrentImageStore.updateCurrentImage(payload.newImage);
       CurrentImageStore.emit(CURRENT_IMAGE_CHANGE);
     }
   })
 });
})(this);
