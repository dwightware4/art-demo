(function(root) {
  'use strict';

  root.ArtPiece = React.createClass({

    getInitialState: function() {
      var artPiece = ImagesStore.artPieceById(CurrentImageStore.currentImage());
      if(artPiece) {
        return {
          artPiece: artPiece,
          currentImage: CurrentImageStore.currentImage(),
        };
      }else {
        ApiUtil.fetchImage(this.props.imageId);
        return {artPiece: null};
      }
    },

    _updateState: function () {
      this.setState({
        artPiece: ImagesStore.artPieceById(this.props.imageId),
        currentImage: CurrentImageStore.currentImage(),
      });
    },

    componentDidMount: function () {
      ImagesStore.addChangeListener(this._updateState);
    },

    removeChangeListener: function () {
      ImagesStore.removeChangeListener(this._updateState);
    },

    nextArt: function() {
      var totalSize = ImageIdsStore.all().length;
      var next = this.state.currentImage + 1;
      var destination = next >= totalSize ? 0 : next;
      ApiActions.changeArt(destination);
    },

    prevArt: function() {
      var next = this.state.currentImage - 1;
      var destination = next < 0 ? ImageIdsStore.all().length - 1 : next;
      ApiActions.changeArt(destination);
    },

    render: function(){
      if(this.state.artPiece === null) {
        return <div/>;
      }
      var image = this.state.artPiece.thumbnailUrl.replace(/_8.jpg/, "_9.jpg");
      return(
        <div className="container bg-black no-overflow">
          <div className="row">
            <img className="img-responsive img-rounded center-block animated zoomInDown" src={image} />
            <div className="navbar-fixed-bottom max-height">
              <h2 className="text-center art-text size-xl animated zoomIn">{this.state.artPiece.title} <span className="art-text size-s">{this.state.artPiece.dateText}</span></h2>
              <h3 className="text-center art-text animated zoomIn">Artist: {this.state.artPiece.artist}</h3>
              <h3 className="text-center art-text animated zoomIn">Source: {this.state.artPiece.creditLine}</h3>
            </div>
            <a className="left carousel-control" onClick={this.prevArt} role="button" data-slide="prev">
              <span className="icon-prev" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" onClick={this.nextArt} role="button" data-slide="next">
              <span className="icon-next" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      );
    }
  });
})(this);
