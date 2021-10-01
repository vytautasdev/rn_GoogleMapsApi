export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_AGE = "SET_USER_AGE";
export const INCREASE_AGE = "INCREASE_AGE";
export const GET_CITIES = "GET_CITIES";

const API_URL = "https://mocki.io/v1/f9dda3c9-d635-4c80-b6b0-54ba42855e32";

export const getCities = () => {
  try {
    return async dispatch => {
      const result = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_CITIES,
          payload: json,
        });
      } else {
        console.log("Unable to connect to the servers.");
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const setName = name => dispatch => {
  dispatch({
    type: SET_USER_NAME,
    payload: name,
  });
};

export const setAge = age => dispatch => {
  dispatch({
    type: SET_USER_AGE,
    payload: age,
  });
};

export const increaseAge = age => dispatch => {
  dispatch({
    type: INCREASE_AGE,
    payload: age,
  });
};
