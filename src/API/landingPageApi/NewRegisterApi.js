import axios from "axios";
const NewRegister = async (register) => {
  try {
    const response = await axios.post(
      "https://egb-api.onrender.com/base/registration/form",
      register
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getState = async () => {
  try {
    const response = await axios.get("https://egb-api.onrender.com/base/state");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getCity = async (state) => {
  try {
    const response = await axios.get(
      `https://egb-api.onrender.com/base/state/${state}/city`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const getDistrict = async (city) => {
  try {
    const response = await axios.get(
      `https://egb-api.onrender.com/base/state/city/${city}/district`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { NewRegister, getState, getCity, getDistrict };
