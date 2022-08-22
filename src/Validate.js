import * as Yup from 'yup';

  export const LoginSchema = Yup.object().shape({
    tokenName: Yup.string().required("name is required"),
    tokenSymbol: Yup.string().required("symbol must required"),
    tokenDecimals: Yup.string().required("decimals must be 18"),
    initialSupply: Yup.number().required("must provide initial supply").moreThan(0, "initail supply must be greater than 0"),
    totalSupply: Yup.number().required("total supply required").moreThan(0, "total supply must be greater than 0"),
    
  });

 



