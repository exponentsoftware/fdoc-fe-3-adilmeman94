import React, { useEffect, useState } from "react";
import Album from "./album";

function Albums(props) {
  const { albums, deleteAlbum } = props;
  const [search, setSearch] = useState("");
  const [renderAlbum, setRenderAlbum] = useState(albums);

  const OnSearch = (e) => {
    e.preventDefault();
    console.log(search, "ser");
    const filterdAlbum = albums.filter(
      (el) =>
        el.artist.toLowerCase() === search.toLowerCase() ||
        el.album_title.toLowerCase() === search.toLowerCase()
    );
    setRenderAlbum(filterdAlbum);
    console.log(filterdAlbum, "fil");
  };

  useEffect(() => {}, [albums]);
  return (
    <div>
      <div className="search-box">
        <form
          className="d-flex mt-3 mb-5"
          onSubmit={(e) => {
            OnSearch(e);
          }}
        >
          <input
            className="form-control me-2"
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search"
            aria-label="Search"
            required
          />

          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="albums-div">
        {renderAlbum &&
          renderAlbum.map((item) => (
            <div key={item.id}>
              <Album
                artist={item.artist}
                albumeName={item.album_title}
                albumCover={item.album_cover}
                uniqno={item.id}
                songs={item.songs}
                deleteAlbum={deleteAlbum}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Albums;
