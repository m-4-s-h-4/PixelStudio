/* eslint-disable @next/next/no-img-element */
import { gql } from "graphql-request";
import { client } from "../../lib/client";
import Slider from "../../components/Slider/Slider";
import styles from "./SingleProject.module.css";

type ProjectParam = {
  params: { projectId: string };
};

interface ProjectDetails {
  title: string;
  info: string;
  summary: string[];
  links: {
    url: string;
  }[];
  date: string;
  photos: {
    url: string;
  }[];
  slider: {
    url: string;
  }[];
  thumbnail: {
    url: string;
  };
}

const GET_PROJECT_DETAILS = gql`
  query ProjectID($projectId: ID!) {
    project(where: { id: $projectId }) {
      title
      info
      summary
      links {
        url
      }
      date
      photos {
        url
      }
      slider {
        url
      }
      thumbnail {
        url
      }
    }
  }
`;

async function page({ params: { projectId } }: ProjectParam) {
  const { project } = await client.request<{ project: ProjectDetails }>(
    GET_PROJECT_DETAILS,
    { projectId },
  );

  const { summary, links, date, photos, slider } = project;

  console.log(typeof summary, summary);

  return (
    <div className={styles.projectLayout}>
      <div className={styles.sliderContainer}>
        <Slider images={slider} />
        <div className={styles.belowSlider}>
          <div className={styles.photoContainer}>
            <img src={photos[0]?.url} alt="Featured" />
          </div>
          <div className={styles.infoContainer}>
            <p>
              {summary.map((word: string, index: number) => (
                <span key={index} className={styles.wordBox}>
                  {word}
                </span>
              ))}
            </p>

            {links.map((link, index) => (
              <a key={index} href={link.url} className={styles.linkStyle}>
                {link.url}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.rightSideContent}>
        <h1 className={styles.projectsTitleContainer}>{project.title}</h1>
        <p className={styles.info}>{project.info}</p>
      </div>
    </div>
  );
}

export default page;
