import { gql } from "graphql-request";
import { client } from "./lib/client";

type AboutMe = {
  welcomeNote: string;
  education: string;
  contactMe: string;
  intro: string;
};

type AboutMeQueryResult = {
  aboutMes: AboutMe[];
};

const AboutMeQuery = gql`
  query AboutMe {
    aboutMes {
      welcomeNote
      intro
      education
      contactMe
    }
  }
`;

export default async function AboutMe() {
  const { aboutMes }: AboutMeQueryResult = await client.request(AboutMeQuery);

  const firstAboutMe = aboutMes[0];

  return (
    <div>
      <div>
        <h1>{firstAboutMe.welcomeNote}</h1>
        <h2>Education</h2>
        <h2>{firstAboutMe.education}</h2>
        <h2>Introduction</h2>
        <h2>{firstAboutMe.intro}</h2>
        <h3>What can i help you with?</h3>
        <h3>{firstAboutMe.contactMe}</h3>
      </div>
    </div>
  );
}
