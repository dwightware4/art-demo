(function(root) {
  'use strict';

  root.Main = React.createClass({
    getInitialState: function() {
      ApiUtil.fetchImageIds();
      return {imageIds: ImageIdsStore.all()};
    },

    _updateState: function () {
      this.setState({imageIds: ImageIdsStore.all()});
    },

    componentDidMount: function () {
      ImageIdsStore.addChangeListener(this._updateState);
    },

    removeChangeListener: function () {
      ImageIdsStore.removeChangeListener(this._updateState);
    },

    render: function(){
      return(
        <div>
          {this.state.imageIds.map(function(imageId) {
            return <p key={imageId}>{imageId}</p>;
          })}
        </div>
      );
    }
  });
})(this);
