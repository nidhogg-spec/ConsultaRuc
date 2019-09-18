import ReCAPTCHA from "react-google-recaptcha";
 
function onChange(value) {
  console.log("Captcha value:", value);
}
 
ReactDOM.render(
  <ReCAPTCHA
    sitekey="http://consultaruc.hopto.org:3000/api/APadronSunat/consulta"
    onChange={onChange}
  />,
  document.body
);