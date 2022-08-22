import * as Yup from 'yup';

  export const LoginSchema = Yup.object().shape({
    tokenName: Yup.string().required("name is required"),
    tokenSymbol: Yup.string().required("symbol must required"),
    tokenDecimals: Yup.string().required("Enter 18"),
    initialSupply: Yup.string().required("must provide initial supply"),
    totalSupply: Yup.string().required("total supply required"),
    
  });

 



