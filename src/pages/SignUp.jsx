import { useState } from "react";
import axios from "axios";
import FormContainer from "../components/FormContainer";
import FormField from "../components/FormField";
import Button from "../components/Button";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit() {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      setFormData({ username: "", email: "", password: "" });

      try {
        const response = await axios.post(
          "https://booksdotcom.onrender.com/api/v1/auth/register",
          formData,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        alert("Signed Up successfully", response.data);
      } catch (error) {
        if (error.response) {
          alert("An error occurred");
        } else if (error.request) {
          alert("No response from the server. Please try again.");
        } else {
          alert("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <FormContainer>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl pb-6 font-ubuntu font-bold text-MarineBlue">
          Sign Up
        </h2>
        <FormField
          label=" Name"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
        />
        <FormField
          label=" Email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <FormField
          label=" Password"
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          disabled={loading}
        />
        <Button text="Submit" onClick={handleSubmit} />
      </div>
    </FormContainer>
  );
}
export default SignUp;
