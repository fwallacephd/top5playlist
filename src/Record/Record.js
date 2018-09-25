import React from 'react';

const record = (props) => {
  return (
      <div className="col-sm-4">
        <img className="album-image animated flipinX img-fluid" src={props.image} alt="Stroke 9 Album"></img>
        <audio controls>
          <source src={props.music} type="audio/mp3"></source>
        </audio>
        <br></br>
        <h6 className="artist"><span class="title">Artist:</span> {props.artist}</h6>
        <h6 className="song"><span class="title">Song:</span> {props.song}</h6>
        <h6 className="album"><span class="title">Album:</span> {props.album}</h6>
      </div>
  );
}

export default record;