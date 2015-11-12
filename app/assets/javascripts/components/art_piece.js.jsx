(function(root) {
  'use strict';

  root.ArtPiece = React.createClass({
    getInitialState: function() {
      var artPiece = ImagesStore.artPieceById(this.props.imageId);
      if(artPiece) {
        return {artPiece: artPiece};
      }else {
        ApiUtil.fetchImage(this.props.imageId);
        return {artPiece: null};
      }
    },

    _updateState: function () {
      this.setState({artPiece: ImagesStore.artPieceById(this.props.imageId)});
    },

    componentDidMount: function () {
      ImagesStore.addChangeListener(this._updateState);
    },

    removeChangeListener: function () {
      ImagesStore.removeChangeListener(this._updateState);
    },

    render: function(){
      if(this.state.artPiece === null) {
        return <div/>;
      }
      // var image = this.state.artPiece.thumbnailUrl.replace(/_8.jpg/, "_9.jpg");
      var image = 'http://www.tate.org.uk/art/images/work/A/A00/A00741_9.jpg';
      return(
        <div className="container bg-black">
          <div className="row">
            <img class="img-responsive text-center" src={image} />
            <h2 className="text-center art-text">{this.state.artPiece.title} {this.state.artPiece.dateText}</h2>
          </div>
        </div>
      );
    }
  });
})(this);
