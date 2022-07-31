import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
  import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

import React, { useState, useEffect } from "react";

export default function Home({ githubProfileData }) {
  // const [_document] = React.useState(null);

  // React.useEffect(() => {
  //   document.addEventListener("DOMContentLoaded", function () {
  //     console.log("page loading complete!");
  //     document
  //       .getElementById("Wordpress")
  //       .childNodes[0].setAttribute("viewBox", "0 0 112 117");
  //   });
  // }, []);

  return (
    <div>
      <SEO
        data={{
          title: "Zaldy Jeg Piraman",
          description:
            "A passionate Software Engineer And Full Stack Web Developer",
          image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
          url: "https://zaldyjegpiraman.github.io/developer-portfolio",
          keywords: [
            "Zaldy",
            "Zaldy Jeg Piraman",
            "@zaldyjegpiraman",
            "zaldyjegpiraman",
            "Portfolio",
            "Zaldy Portfolio ",
            "Zaldy Jeg Piraman Portfolio",
          ],
        }}
      />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Feedbacks />
      <Projects />
      <GithubProfileCard prof={githubProfileData} />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
