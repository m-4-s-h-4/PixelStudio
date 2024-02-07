"use client";

import { useProjects } from "./useProjects";
import styles from "./Projects.module.css";
import Link from "next/link";

export default function Projects() {
  const {
    filteredProjects,
    uniqueSummaries,
    selectedSummary,
    setSelectedSummary,
  } = useProjects();

  return (
    <div className={styles.projectList}>
      <div className={styles.summaryContainer}>
        {/* Filter buttons */}
        {uniqueSummaries.map((summary) => (
          <button
            key={summary}
            className={`${styles.filterButton} ${
              selectedSummary === summary ? styles.selectedSummary : ""
            }`}
            onClick={() => setSelectedSummary(summary)}
          >
            {summary}
          </button>
        ))}
        <button
          className={styles.filterButton}
          onClick={() => setSelectedSummary("")}
        >
          All
        </button>
      </div>
      {/* Project grid */}
      <div className={styles.projectGrid}>
        {filteredProjects.map((project) => (
          <div key={project.id} className={styles.project}>
            <Link href={`/projects/${project.id}`}>
              <div>
                <div className={styles.projectInner}>
                  <img
                    src={project.thumbnail.url}
                    alt={project.title}
                    className={styles.projectImage}
                  />
                  <div className={styles.projectTitle}>{project.title}</div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
