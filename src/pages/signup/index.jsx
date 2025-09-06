import React from "react";
import logo from "../../assets/facebook.svg";
import { useGetValues } from "../../hooks/useGetValues";
import { months, genders } from "../../static";

const Signup = () => {
  const initialState = {
    firstName: "",
    surname: "",
    email: "",
    password: "",
    day: "",
    month: "",
    year: "",
    gender: "",
  };

  const { formData, handleChange, setFormData } = useGetValues(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    setFormData(initialState);
  };

  return (
    <div className="bg-[#f0f2f5] h-screen mx-auto flex flex-col items-center py-8">
      <div className="w-[300px] mb-3">
        <img src={logo} alt="Facebook Logo" className="w-full" />
      </div>

      <div className="bg-white shadow-lg rounded-xl p-8 w-[432px]">
        <h1 className="text-2xl font-bold text-center text-black mb-4">
          Create a new account
        </h1>
        <p className="text-center text-gray-600 mb-6">It’s quick and easy.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              className="w-1/2 p-3 border rounded-lg focus:border-black border-gray-300"
            />
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Surname"
              className="w-1/2 p-3 border rounded-lg focus:border-black border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Birthday</label>
            <div className="flex gap-2 mt-1">
              <select
                name="month"
                value={formData.month}
                onChange={handleChange}
                className="w-1/3 p-2 border rounded-lg border-gray-300"
              >
                <option value="">Month</option>
                {months.map((m, i) => (
                  <option key={i} value={m}>
                    {m}
                  </option>
                ))}
              </select>

              <select
                name="day"
                value={formData.day}
                onChange={handleChange}
                className="w-1/3 p-2 border rounded-lg border-gray-300"
              >
                <option value="">Date</option>
                {[...Array(31)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>

              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-1/3 p-2 border rounded-lg border-gray-300"
              >
                <option value="">Year</option>
                {Array.from({ length: 50 }, (_, i) => 2025 - i).map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600">Gender</label>
            <div className="flex gap-4 mt-1">
              {genders.map((g) => (
                <label
                  key={g}
                  className="flex items-center gap-2 border p-2 rounded-lg w-1/3 border-gray-300"
                >
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={formData.gender === g}
                    onChange={handleChange}
                  />
                  {g}
                </label>
              ))}
            </div>
          </div>

          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Mobile number or email address"
            className="w-full p-3 border rounded-lg focus:border-black border-gray-300"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="New password"
            className="w-full p-3 border rounded-lg focus:border-black border-gray-300"
          />

          <p className="text-xs text-gray-500">
            By clicking Sign Up, you agree to our Terms, Privacy Policy and
            Cookies Policy. You may receive SMS Notifications from us and can
            opt out any time.
          </p>

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
