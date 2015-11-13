(function(root) {
  'use strict';

  root.Main = React.createClass({
    getInitialState: function() {
      ApiUtil.fetchImageIds();
      return {
        imageIds: ImageIdsStore.all(),
        currentImage: CurrentImageStore.currentImage(),
      };
    },

    _updateImageIds: function () {
      this.setState({
        imageIds: ImageIdsStore.all(),
      });
    },

    _updateCurrentImage: function() {
      this.setState({currentImage: CurrentImageStore.currentImage()});
    },

    componentDidMount: function () {
      ImageIdsStore.addChangeListener(this._updateImageIds);
      CurrentImageStore.addChangeListener(this._updateCurrentImage);
    },

    componentWillUnmount: function () {
      ImageIdsStore.removeChangeListener(this._updateImageIds);
      CurrentImageStore.removeChangeListener(this._updateCurrentImage);
    },

    render: function(){
      if(this.state.imageIds.length === 0) {
        return <div/>;
      }else {
        return(
          <div>
            <NavBar />
            <ArtPiece key={this.state.currentImage} imagePos={this.state.currentImage} imageId={this.state.imageIds[this.state.currentImage]} />
          </div>
        );
      }
    }
  });
})(this);
