import { types } from "mobx-state-tree";

const PoolMachine = types
  .model("PoolMachine", {
    pool: "",
    machine: "",
  })
  .actions((self) => ({
    set(key, value) {
      self[key] = value;
    },
  }));

export default PoolMachine;
