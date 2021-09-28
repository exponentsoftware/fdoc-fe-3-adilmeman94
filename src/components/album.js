import React from "react";

function Album(props) {
  const { artist, albumeName, albumCover, uniqno, songs, deleteAlbum } = props;

  return (
    <div
      className="card"
      style={{ width: "18rem" }}
      uniqno={uniqno ? uniqno : ""}
    >
      <img src={albumCover} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{albumeName}</h5>
        <p className="card-text text-underline">
          <u>{artist}</u>
        </p>

        {songs &&
          songs.map((item, index) => (
            <p className="songlist" key={index}>
              <strong>Song :</strong>
              {item}
            </p>
          ))}
        <button
          onClick={(e) => {
            deleteAlbum(e, uniqno);
          }}
        >
          Delete Album
        </button>
      </div>
    </div>
  );
}

export default Album;
