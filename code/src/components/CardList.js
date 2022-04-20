import React from "react";
import CardListItem from "../utils/CardListItem";

const CardList = ({ newJobs }) => {
  return (
    <ul className="card__list">
      {newJobs.map((job) => (
        <CardListItem
          key={job.id}
          id={job.id}
          company={job.company}
          logo={job.logo}
          newJob={job.new}
          featured={job.featured}
          role={job.role}
          position={job.position}
          level={job.level}
          postedAt={job.postedAt}
          contract={job.contract}
          location={job.location}
          languages={job.languages}
          tools={job.tools}
        />
      ))}
    </ul>
  );
};

export default CardList;
