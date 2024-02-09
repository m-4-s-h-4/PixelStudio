"use client";

import { useState } from "react";
import { useProjects } from "./useProjects";
import styles from "./Projects.module.css";
import Link from "next/link";
import ProjectNumber from '../components/ProjectNumber/ProjectNumber'; 
export default function Projects() {
  const { filteredProjects, uniqueSummaries, setSelectedSummary } = useProjects();
  const [showFilter, setShowFilter] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleFilterDropdown = () => setShowFilter(!showFilter);

  const updateCurrentIndex = (newIndex: number) => {
    setCurrentIndex(newIndex);
  };

  return (
    <div className={styles.projectList}>
      <div className={styles.summaryContainer}>
        {filteredProjects.map((project, index) => (
          <div key={project.id} className={styles.project} onMouseEnter={() => updateCurrentIndex(index)}>
            <Link href={`/projects/${project.id}`}>
              <div className={styles.projectInner}>
                <img src={project.thumbnail.url} alt={project.title} className={styles.projectImage} />
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.projectsRightSide}>
      <div className={styles.projectsTitleContainer}>
        <ProjectNumber currentIndex={currentIndex} className={styles.numberBehind} /> 
        <div className={styles.projectsTitle}>Projects</div> 
        <div className={styles.contactNote}>Can not find exactly what you are looking for? Reach out to craft something uniquely yours.</div> 
        </div>
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
