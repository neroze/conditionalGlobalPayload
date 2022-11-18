function Remote() {
  let options = {};
  const actions = {
    setOptions(key, value) {
      this.options[key] = value;
    },
    decoratePayload(data) {
      this._decoration = data;
      return this;
    },

    requests(_data, method = "POST") {
      const postData = { ..._data, ...this._decoration };
      return fetch("http://localhost:3000/users", {
        method,
        body: JSON.stringify(postData),
      });
    },
  };

  return actions;
}

export default new Remote();
