"use client";

import { useState, useEffect, useMemo } from "react";
import { gql } from "graphql-request";
import { client } from "../lib/client";

export type Project = {
  id: string;
  title: string;
  date: string;
  summary: string[];
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
      id
      title
      date
      thumbnail {
        url
      }
      summary
    }
  }
`;

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedSummary, setSelectedSummary] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      try {
        const { projects }: ProjectsQueryResult =
          await client.request(ProjectsQuery);
        setProjects(projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }

    fetchData();
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedSummary === "") {
      return projects;
    } else {
      return projects.filter((project) =>
        project.summary.includes(selectedSummary),
      );
    }
  }, [selectedSummary, projects]);

  const uniqueSummaries = useMemo(() => {
    const allSummaries = projects.flatMap((project) => project.summary);
    return Array.from(new Set(allSummaries));
  }, [projects]);

  return {
    filteredProjects,
    uniqueSummaries,
    selectedSummary,
    setSelectedSummary,
  };
}
