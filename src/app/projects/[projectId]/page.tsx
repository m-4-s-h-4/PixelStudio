import { gql } from "graphql-request";
import { client } from "../../lib/client";

type ProjectParam = {
  params: { projectId: string };
};

interface ProjectDetails {
  title: string;
  info: string;
  summary: string;
  links: {
    url: string;
  }[];
  date: string;
  photos: {
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

  const { summary, links, date, photos } = project;

  return (
    <div>
      <div>
        <h1>Title: {project.title}</h1>
        <p>Information: {project.info}</p>
        <p>Summary: {summary}</p>
        <p>Date: {date}</p>
        <div>
          <h2>Links:</h2>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.url}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Photos:</h2>
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo.url}
              alt={`Photo ${index}`}
              style={{ height: "200px", objectFit: "cover" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
