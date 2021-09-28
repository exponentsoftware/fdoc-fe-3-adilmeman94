import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddAlbum from "./components/AddAlbum";
import Albums from "./components/albums";
import Navigation from "./components/Navigation";
import Home from "./components/Home";

function App() {
  const [albums, setAlbums] = useState([
    {
      id: 1,
      artist: "A R Rahman",
      album_title: "Rockstar",
      album_cover:
        "https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b",
      songs: ["e nadan parinde", "hawa hawa", "sadda haq"],
    },
    {
      id: 2,
      artist: "Jubin Nautial",
      album_title: "JukeBox",
      album_cover:
        "https://a10.gaanacdn.com/gn_img/albums/kGxbnw0Ky4/Gxbn8dG03y/size_xxl.jpg",
      songs: ["Meri Aashiqui", "Humnava", "Akh lad jaave"],
    },
    {
      id: 3,
      artist: "Arijit Singh",
      album_title: "Love song",
      album_cover:
        "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg",
      songs: ["Humdard", "DekhLena", "Naina"],
    },
    {
      id: 4,
      artist: "Atif Aslam",
      album_title: "Hits Of Atif",
      album_cover:
        "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
      songs: ["Be inteha", "Doorie", "ku6 is tarah"],
    },
    {
      id: 5,
      artist: "Atif Aslam",
      album_title: "Hits Of Atif",
      album_cover:
        "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
      songs: ["Be inteha", "Doorie", "ku6 is tarah"],
    },
    {
      id: 6,
      artist: "Arijit Singh",
      album_title: "Love song",
      album_cover:
        "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg",
      songs: ["Humdard", "DekhLena", "Naina"],
    },
    {
      id: 7,
      artist: "Jubin Nautial",
      album_title: "JukeBox",
      album_cover:
        "https://a10.gaanacdn.com/gn_img/albums/kGxbnw0Ky4/Gxbn8dG03y/size_xxl.jpg",
      songs: ["Meri Aashiqui", "Humnava", "Akh lad jaave"],
    },
    {
      id: 8,
      artist: "A R Rahman",
      album_title: "Rockstar",
      album_cover:
        "https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b",
      songs: ["e nadan parinde", "hawa hawa", "sadda haq"],
    },
  ]);

  const deleteAlbum = (e, id) => {
    e.preventDefault();
    for (let i = 0; i < albums.length; i++) {
      if (albums[i].id === id) {
        albums.splice(i, 1);
        console.log(albums, "remain");
      }
    }
  };

  useEffect(() => {
    setAlbums(albums);
  }, [albums]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/addalbum"
            render={(props) => {
              return (
                <AddAlbum {...props} albums={albums} setAlbums={setAlbums} />
              );
            }}
          />
          <Route
            exact
            path="/albums"
            render={(props) => {
              return (
                <Albums {...props} albums={albums} deleteAlbum={deleteAlbum} />
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
