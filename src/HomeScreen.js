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
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />

      <Row
        title="Trending Now"
        fetchUrl={request.fetchNetflixTrending}
        isLargeRow
      />
      <Row
        title="Top Rated"
        fetchUrl={request.fetchNetflixTopRated}
        isLargeRow
      />
      <Row
        title="Action Movies"
        fetchUrl={request.fetchActionMovies}
        isLargeRow
      />
      <Row
        title="Comedy Movies"
        fetchUrl={request.fetchComedyMovies}
        isLargeRow
      />
      <Row
        title="Horror Movies"
        fetchurl={request.fetchHorrorMovies}
        isLargeRow
      />
      <Row
        title="Rommance Movies"
        fetchUrl={request.fetchRomanceMovies}
        isLargeRow
      />
      <Row
        title="Documentaries Movies"
        fetchUrl={request.fetchDocumentaries}
        isLargeRow
      />
    </div>
  );
}

export default HomeScreen;
