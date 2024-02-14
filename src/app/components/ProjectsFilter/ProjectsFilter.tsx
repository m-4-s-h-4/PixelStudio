import React from "react";
import FilterIcon from "./FilterIcon";
import styles from "./ProjectsFilter.module.css";

type ProjectsFilterProps = {
  uniqueSummaries: string[];
  setSelectedSummary: (summary: string) => void;
};

const ProjectsFilter: React.FC<ProjectsFilterProps> = ({
  uniqueSummaries,
  setSelectedSummary,
}) => {
  const [showFilter, setShowFilter] = React.useState(false);

  const toggleFilterDropdown = () => setShowFilter(!showFilter);

  return (
    <div className={styles.filterMenu}>
      <button className={styles.filterButton} onClick={toggleFilterDropdown}>
        <FilterIcon isOpen={showFilter} />
      </button>
      <div
        className={`${styles.filterDropdown} ${showFilter ? styles.show : ""}`}
      >
        {uniqueSummaries.map((summary) => (
          <a
            key={summary}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setSelectedSummary(summary);
              setShowFilter(false);
            }}
          >
            {summary}
          </a>
        ))}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setSelectedSummary("");
            setShowFilter(false);
          }}
        >
          All
        </a>
      </div>
    </div>
  );
};

export default ProjectsFilter;
