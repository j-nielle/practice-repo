'use client'
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

export default function Formik() {
  const [data, setData] = useState({}); // This will be used to show the form data after submission
  const [message, setMessage] = useState(""); // This will be used to show a message if the submission is successful
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    onSubmit: () => {
      setData(formik.values);
      setMessage("Form submitted");
      setSubmitted(true);
    },
    /* 		initialErrors: {
			email: "Email is required",
			name: "Name is required",
			message: "Message is required",
		}, */
    validationSchema: yup.object({
      name: yup.string().trim().required("Name is required"),
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
      message: yup.string().trim().required("Message is required"),
    }),
  });

  return (
    <>
      <title>Formik & Yup Basics</title>
      <meta name="description" content="Basic form validation w/ formik & yup" />
      <div className="flex flex-col justify-center items-center p-5 bg-gray-100">
        <div
          hidden={!submitted}
          className="bg-green-700 text-white p-3 rounded-md"
        >
          {message}
        </div>

        <form
          className="w-1/2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={formik.handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="John Doe"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.name && (
              <div className="text-red-600">{formik.errors.name}</div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="john@example.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && (
              <div className="text-red-600">{formik.errors.email}</div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your message ..."
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.message && (
              <div className="text-red-600">{formik.errors.message}</div>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
