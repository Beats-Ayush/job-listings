import React from "react";

import { useStore } from "../store/store";
import jobs from "../data.json";
import CardList from "./CardList";
import CardSpecificationsList from "./CardSpecificationsList";

const Form = (props) => {
  const [globalState, dispatch] = useStore();
  let newJobs = [...jobs];

  let requiredSpecifications = [];
  if (globalState.specifications.length > 0) {
    newJobs = [];
    requiredSpecifications = [...globalState.specifications];

    jobs.forEach((job) => {
      let ctr = 0;
      const { role, level, languages, tools } = job;
      requiredSpecifications.forEach((reqSpec) => {
        if (
          reqSpec === role ||
          reqSpec === level ||
          languages.includes(reqSpec) ||
          tools.includes(reqSpec)
        ) {
          ctr++;
        }
      });
      if (ctr === requiredSpecifications.length) {
        newJobs.push(job);
      }
    });
  }

  const clearAllSpecificationsHandler = (e) => {
    e.preventDefault();
    dispatch("ALL_SPECIFICATIONS_CLEARED");
  };

  const deleteSpecificationHandler = (e) => {
    e.preventDefault();
    dispatch("SPECIFICATION_DELETED", e.target.name);
  };

  return (
    <form className="card">
      {requiredSpecifications.length > 0 && (
        <CardSpecificationsList
          deleteSpecification={deleteSpecificationHandler}
          clearAllSpecifications={clearAllSpecificationsHandler}
          requiredSpecifications={requiredSpecifications}
        />
      )}
      <CardList newJobs={newJobs} />
    </form>
  );
};

export default Form;
