import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

const AddAlbum = (props) => {
  const fileInputRef = useRef();
  const history = useHistory();
  const { albums, setAlbums } = props;
  const [artist, setArtist] = useState("");
  const [albumeName, setAlbumName] = useState("");
  const [albumCover, setAlbumCover] = useState("");

  const onSelectFile = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files.length > 0) {
        setAlbumCover(URL.createObjectURL(e.target.files[0]));
      }
    }
  };

  const onsubmit = (e) => {
    e.preventDefault();
    setAlbums([
      ...albums,

      {
        id: new Date().getTime().toString(),
        artist: artist,
        album_title: albumeName,
        album_cover: albumCover,
      },
    ]);
    setArtist("");
    setAlbumName("");
    setAlbumCover("");
    history.push("/albums");
  };

  return (
    <div className="addAlbum-div mt-5">
      <h3> Add Album</h3>
      <div className="form-div mt-5 col-lg-6 col-md-6 col-sm-8">
        <form
          onSubmit={(e) => {
            onsubmit(e);
          }}
        >
          <div class="mb-3">
            <label class="form-label">Album Title </label>
            <input
              type="text"
              class="form-control"
              placeholder="Album Title"
              value={albumeName}
              onChange={(e) => {
                setAlbumName(e.target.value);
              }}
              required
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Atrist Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Artist Name"
              value={artist}
              onChange={(e) => {
                setArtist(e.target.value);
              }}
              required
            />
          </div>
          <div class="mb-3">
            <label for="formFile" class="form-label">
              Album Cover
            </label>
            <input
              class="form-control"
              type="file"
              id="formFile"
              ref={fileInputRef}
              onChange={(e) => {
                onSelectFile(e);
              }}
              required
            />
          </div>
          <button class="btn btn-primary">Submit</button>
        </form>
        {albumCover && <img src={albumCover} alt="image1" />}
      </div>
    </div>
  );
};

export default AddAlbum;
