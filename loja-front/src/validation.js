import * as Yup from "yup";

const FormValidation = Yup.object().shape({
  nome: Yup.string().required(),
  email: Yup.string().email().required(),
  senha: Yup.string().required()
});

export default FormValidation