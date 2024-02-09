"use client";

import { useState } from "react";
import { useProjects } from "./useProjects";
import styles from "./Projects.module.css";
import Link from "next/link";

export default function Projects() {
  const { filteredProjects, uniqueSummaries, setSelectedSummary } = useProjects();
  const [showFilter, setShowFilter] = useState(false);

  // Toggle dropdown visibility
  const toggleFilterDropdown = () => setShowFilter(!showFilter);

  return (
    <div className={styles.projectList}>
      <div className={styles.summaryContainer}>
        {filteredProjects.map((project) => (
          <div key={project.id} className={styles.project}>
            <Link href={`/projects/${project.id}`}>
              <div className={styles.projectInner}>
                <img src={project.thumbnail.url} alt={project.title} className={styles.projectImage} />
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.projectsRightSide}>
        <div className={styles.projectsTitle}>Projects</div> {/* Apply the new class here */}
        <div className={styles.filterMenu}>
          <button className={styles.filterButton} onClick={toggleFilterDropdown}>Filter</button>
          <div className={`${styles.filterDropdown} ${showFilter ? styles.show : ""}`}>
            {uniqueSummaries.map((summary) => (
              <a key={summary} onClick={() => {setSelectedSummary(summary); setShowFilter(false);}}>
                {summary}
              </a>
            ))}
            <a onClick={() => {setSelectedSummary(""); setShowFilter(false);}}>All</a>
          </div>
        </div>
      </div>
    </div>
  );
}
