import React from 'react';

const record = () => {
  return (
    <div className="recordListing container-fluid">
      <div className="row center-block">
        <div className="col-sm-4">
        <img className="album-image animated flipinX img-fluid" src="./stroke9Album.png" alt="Stroke 9 Album"></img>
        <audio controls>
          <source src="./NotNothin.m4a" type="audio/mp3"></source>
        </audio>
        <br></br>
        <h6 className="artist"><span class="title">Artist:</span> Stroke 9</h6>
        <h6 className="song"><span class="title">Song:</span> Not Nothin'</h6>
        <h6 className="album"><span class="title">Album:</span> Nasty Little Thoughts</h6>
      </div>
    </div>
    </div>
  );
}

export default record;