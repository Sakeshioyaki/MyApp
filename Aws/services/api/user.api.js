export const apiSignup = async (email, password, accountName) => {
  try {
    const response = await fetch('https://192.168.71.114:8001/signup', {
      method: 'POST',
      headers: {
        Content: 'SignUp',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        accountName: accountName,
      }),
    });
    const json = await response.json();
    return json.body;
  } catch (error) {
    console.error(error);
  }
};

// import { RegisterUserReq } from "../../model/parameters/RegisterUser";
// import axiosInstance from "./AxiosInstance";

// export async function apiRegister(parameter: RegisterUserReq) {
//   const response = await axiosInstance.post("/signup", parameter.parameter());
//   console.log(`Axios fetch response signin : ${JSON.stringify(response)}`);
//   return response.data;
// }
