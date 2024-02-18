import { useEffect } from 'react';

const ProjectFilter = () => {
  useEffect(() => {
    // Event listener for project filter li clicks
    const handleProjectFilterClick = (event) => {
      const clickedItem = event.target;
      if (clickedItem.tagName === 'LI') {
        // Toggle class for project-filter-active
        clickedItem.classList.add('project-filter-active');
        Array.from(clickedItem.parentElement.children).forEach((sibling) => {
          if (sibling !== clickedItem) {
            sibling.classList.remove('project-filter-active');
          }
        });
      }
    };

    // Event listener for list clicks
    const handleListClick = (event) => {
      const value = event.target.getAttribute('data-filter');
      const projectBoxes = document.querySelectorAll('.project-box');
      
      if (value === 'all') {
        projectBoxes.forEach((box) => box.style.display = 'block');
      } else {
        projectBoxes.forEach((box) => {
          box.style.display = box.classList.contains(value) ? 'block' : 'none';
        });
      }
    };

    // Event listener for nav-toggle click
    const handleNavToggleClick = () => {
      document.body.classList.toggle('nav-open');
    };

    // Simulate a click on the "All" item to initially load all projects
    const allItem = document.querySelector('.project-filter li[data-filter="all"]');
    allItem.click();

    // Attach event listeners when the component mounts
    document.addEventListener('click', handleProjectFilterClick);
    document.addEventListener('click', handleListClick);
    document.querySelector('.nav-toggle').addEventListener('click', handleNavToggleClick);

    // Clean up event listeners when the component unmounts
    return () => {
      document.removeEventListener('click', handleProjectFilterClick);
      document.removeEventListener('click', handleListClick);
      document.querySelector('.nav-toggle').removeEventListener('click', handleNavToggleClick);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return null;
};

export default ProjectFilter;
