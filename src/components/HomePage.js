import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useQuery from "../hooks/useQuery";
import About from "./About";
import ArticleList from "./ArticleList";

function HomePage() {
  
  const homePageTitle = 'Underreacted | Home'
  const {data:posts, isLoaded} = useQuery("http://localhost:4000/posts"); // to rename data as posts


  useDocumentTitle(homePageTitle)

  return (
    <>
      <About />
      {isLoaded ? <ArticleList posts={posts} /> : <h3>Loading...</h3>}
    </>
  );
}

export default HomePage;