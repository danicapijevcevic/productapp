export const action = (type) => (value) => ({ type, value });

export const createReducer = (reducerObject) => {
  const initialState = Object.keys(reducerObject).reduce(
    (acc, item) => ({
      ...acc,
      [reducerObject[item].key]: reducerObject[item].value,
    }),
    {}
  );
  return (state = initialState, { value, type }) => ({
    ...state,
    ...Object.keys(reducerObject).reduce(
      (acc, item) => ({ ...acc, [item]: { [reducerObject[item].key]: value } }),
      {}
    )[type],
  });
};
