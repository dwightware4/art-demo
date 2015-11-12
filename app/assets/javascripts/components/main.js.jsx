(function(root) {
  'use strict';

  root.Main = React.createClass({
    getInitialState: function() {
      ApiUtil.fetchImageIds();
      return {
        imageIds: ImageIdsStore.all(),
        currentImageId: ImageIdsStore.first(),
      };
    },

    _updateState: function () {
      this.setState({
        imageIds: ImageIdsStore.all(),
        currentImageId: ImageIdsStore.first(),
      });
    },

    componentDidMount: function () {
      ImageIdsStore.addChangeListener(this._updateState);
    },

    removeChangeListener: function () {
      ImageIdsStore.removeChangeListener(this._updateState);
    },

    render: function(){
      if(typeof this.state.currentImageId === 'undefined') {
        return <div/>;
      }else {
        return(
          <div>
            <NavBar />
            <ArtPiece key={0} imageId={this.state.currentImageId} />
          </div>
        );
      }
    }
  });
})(this);
