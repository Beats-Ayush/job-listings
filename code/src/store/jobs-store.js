import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    SPECIFICATION_SELECTED: (curState, specification) => {
      const newSpecifications = [...curState.specifications];
      if (curState.specifications.includes(specification)) {
        return { specifications: newSpecifications };
      }

      newSpecifications.push(specification);
      return { specifications: newSpecifications };
    },
    SPECIFICATION_DELETED: (curState, specification) => {
      let newSpecifications = [...curState.specifications];
      newSpecifications = newSpecifications.filter((s) => s !== specification);
      return { specifications: newSpecifications };
    },
    ALL_SPECIFICATIONS_CLEARED: () => {
      return { specifications: [] };
    },
  };

  initStore(actions, { specifications: [] });
};

export default configureStore;
