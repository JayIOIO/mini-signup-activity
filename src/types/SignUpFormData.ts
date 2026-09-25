export type SignUpFormData = {
  // Screen 1
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  // Screen 2
  firstName: string;
  lastName: string;
  middleInitial: string;
  gender: string;
  birthday: string;
  address: string;
};
 
export const initialFormData: SignUpFormData = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  middleInitial: "",
  gender: "",
  birthday: "",
  address: "",
};

