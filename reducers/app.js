const originalState = {
  foo: 'bar',
};

export default (state = originalState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
