import React from "react";
import "./homeScreen.css";
import Nav from "./Nav";
import Row from "./Row"
import Banner from "./Banner";
import request from "./request";
function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchurl={request.fetchNetflixOriginals}
        isLargeRow
      />

      <Row
        title="Trending Now"
        fetchurl={request.fetchNetflixTrending}
        isLargeRow
      />
      <Row
        title="Top Rated"
        fetchurl={request.fetchNetflixTopRated}
        isLargeRow
      />
      <Row
        title="Action Movies"
        fetchurl={request.fetchActionMovies}
        isLargeRow
      />
      <Row
        title="Comedy Movies"
        fetchurl={request.fetchComedyMovies}
        isLargeRow
      />
      <Row
        title="Horror Movies"
        fetchurl={request.fetchHorrorMovies}
        isLargeRow
      />
      <Row
        title="Rommance Movies"
        fetchurl={request.fetchRomanceMovies}
        isLargeRow
      />
      <Row
        title="Documentaries Movies"
        fetchurl={request.fetchDocumentaries}
        isLargeRow
      />
    </div>
  );
}

export default HomeScreen;
