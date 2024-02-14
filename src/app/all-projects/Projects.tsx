/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { useProjects } from "./useProjects";
import ProjectsFilter from "../components/ProjectsFilter/ProjectsFilter";
import styles from "./Projects.module.css";
import Link from "next/link";
import ProjectNumber from "../components/ProjectNumber/ProjectNumber";

export default function Projects() {
  const { filteredProjects, uniqueSummaries, setSelectedSummary } =
    useProjects();
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateCurrentIndex = (newIndex: number) => {
    setCurrentIndex(newIndex);
  };

  return (
    <div className={styles.projectList}>
      <div className={styles.summaryContainer}>
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={styles.project}
            onMouseEnter={() => updateCurrentIndex(index)}
          >
            <Link href={`/projects/${project.id}`}>
              <div className={styles.projectInner}>
                <img
                  src={project.thumbnail.url}
                  alt={project.title}
                  className={styles.projectImage}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.projectsRightSide}>
        <div className={styles.projectsTitleContainer}>
          {" "}
          <div className={styles.projectsTitleFlex}>
            <div className={styles.projectsTitle}>Projects</div>
            <ProjectsFilter
              uniqueSummaries={uniqueSummaries}
              setSelectedSummary={setSelectedSummary}
            />
          </div>
          <ProjectNumber
            currentIndex={currentIndex}
            className={styles.numberBehind}
          />
          <div className={styles.contactNote}>
            Can not find exactly what you are looking for? Reach out to craft
            something uniquely yours.
          </div>
        </div>
      </div>
    </div>
  );
}
