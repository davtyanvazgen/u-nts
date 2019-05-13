export const GET_ALL_DATA = "GET_ALL_DATA";
export const EDIT_SERVICE = "EDIT_SERVICE";
export const CHECK_USER = "CHECK_USER";

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

export const checkUser = data => {
  return {
    type: CHECK_USER,
    data: data
  };
};
