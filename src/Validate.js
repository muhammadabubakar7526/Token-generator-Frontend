import * as Yup from 'yup';

  export const LoginSchema = Yup.object().shape({
    firstName: Yup.string().required("name is required"),
    lastName: Yup.string().required("lastname is required"),
    email: Yup.string().email('Invalid email').required('Required')
  });

 



