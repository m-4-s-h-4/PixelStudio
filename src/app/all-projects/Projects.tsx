/* eslint-disable @next/next/no-img-element */
import { gql } from "graphql-request";
import { client } from "../lib/client";
import styles from "./Projects.module.css";
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  date: string;
  summary: string;
  links: {
    url: string;
  }[];
  photos: {
    url: string;
  }[];
  thumbnail: {
    url: string;
  };
  info: string;
};

type ProjectsQueryResult = {
  projects: Project[];
};

const ProjectsQuery = gql`
  query Projects {
    projects {
      title
      id
      date
      thumbnail {
        url
      }
    }
  }
`;

export default async function Projects() {
  const { projects }: ProjectsQueryResult = await client.request(ProjectsQuery);

  return (
    <div className={styles.projectList}>
      {projects.map((project: Project, projectIndex: number) => {
        return (
          <div key={projectIndex} className={styles.project}>
            <Link href={`/projects/${project.id}`}>
              <div>
                <h1>{project.title}</h1>
              </div>
            </Link>
            <img src={project.thumbnail.url} alt={project.title} />
          </div>
        );
      })}
    </div>
  );
}
