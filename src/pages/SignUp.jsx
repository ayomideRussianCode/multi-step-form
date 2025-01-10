import { useState } from "react";
import FormContainer from "../components/FormContainer";
import FormField from "../components/FormField";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit() {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Signed Up successfully", formData);
    }
  }
  return (
    <FormContainer>
      <h2 className="text-2xl font-ubuntu font-bold text-MarineBlue">
        Sign up here
      </h2>
      <FormField
        label=" Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <FormField
        label=" Email"
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <FormField
        label=" Password"
        type="text"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
    </FormContainer>
  );
}
export default SignUp;
