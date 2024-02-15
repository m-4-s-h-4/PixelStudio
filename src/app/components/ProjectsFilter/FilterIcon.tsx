import styles from "./FilterIcon.module.css";

interface FilterIconProps {
  isOpen: boolean;
  className?: string;
}

const FilterIcon: React.FC<FilterIconProps> = ({ isOpen, className }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M68 34C68 52.7777 52.7777 68 34 68C15.2223 68 0 52.7777 0 34C0 15.2223 15.2223 0 34 0C52.7777 0 68 15.2223 68 34Z"
        fill="var(--text-color)"
      />
      {isOpen ? (
        //menu is open
        <>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.3458 37.1705L12 19.7299L15.6917 15L34.3458 29.5594L53 15L56.6917 19.7299L34.3458 37.1705Z"
            fill="var(--bg-color)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.3458 30L56.6916 47.4406L53 52.1705L34.3458 37.6112L15.6916 52.1705L12 47.4406L34.3458 30Z"
            fill="var(--bg-color)"
          />
        </>
      ) : (
        //menu is closed
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.5 48.8056L11.1542 31.3649L14.8458 26.635L33.5 41.1944L52.1542 26.635L55.8458 31.3649L33.5 48.8056Z"
          fill="var(--bg-color)"
        />
      )}
    </svg>
  );
};

export default FilterIcon;
