export const GET_ALL_DATA = "GET_ALL_DATA";
export const EDIT_SERVICE = "EDIT_SERVICE";

export const getServices = data => {
  return {
    type: GET_ALL_DATA,
    data: data
  };
};

export const editService = data => {
  return {
    type: EDIT_SERVICE,
    data: data
  };
};
