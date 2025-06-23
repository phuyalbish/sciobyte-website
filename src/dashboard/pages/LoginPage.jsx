import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_API_URL } from "@/config/baseurl.js";

import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext.jsx";

function LoginPage() {


  const { setUser } = useContext(AuthContext);


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const initialFormState = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const response = await axios.post(`${BASE_API_URL}/login/`, {
        email: formData.email,
        password: formData.password,
      });

      const { access_token, refresh_token } = response.data;

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("refreshToken", refresh_token);
      setSuccessMsg("Login successful!");
      
      setUser(response.data);
      navigate("/dashboard");

    } catch (error) {
      console.error(error);
      setErrorMsg("Invalid email or password.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex test w-full h-screen justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 md:w-[40vw] w-full px-8"
      >
        {successMsg && (
          <p className="text-center text-green-600">{successMsg}</p>
        )}
        {errorMsg && (
          <p className="text-center text-red-500">{errorMsg}</p>
        )}

        <div className="flex flex-col items-start">
          <label htmlFor="email" className="text-sm font-medium text-N600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@email.com"
            required
            className="p-2 mt-1 block w-full rounded-md outline outline-N200 shadow-sm focus:outline-B400 outline-2"
          />
        </div>

        <div className="flex flex-col items-start">
          <label htmlFor="password" className="text-sm font-medium text-N600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            required
            className="p-2 mt-1 block w-full rounded-md outline outline-N200 shadow-sm focus:outline-B400 outline-2"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className={`py-1 px-4 border border-transparent rounded-md shadow-sm font-medium text-white ${
              isSubmitting ? "bg-B900 cursor-not-allowed" : "bg-B500"
            } hover:bg-B500 focus:outline-none focus:ring-2 focus:ring-offset-2 `}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting ..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;