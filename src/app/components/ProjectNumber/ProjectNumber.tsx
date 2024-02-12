interface ProjectNumberProps {
  currentIndex: number;
  className: any;
}

const ProjectNumber: React.FC<ProjectNumberProps> = ({
  currentIndex,
  className,
}) => {
  const formattedIndex = `${currentIndex + 1}`.padStart(2, "0");

  return <span className={className}>{formattedIndex}</span>;
};

export default ProjectNumber;
