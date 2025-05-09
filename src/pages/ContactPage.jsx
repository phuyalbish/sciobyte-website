import  { useEffect, useState } from "react";
import email_blue from "@/assets/email-blue.svg";
import email_green from "@/assets/email-green.svg";
import location_img from "@/assets/location.svg";
import phone_calling from "@/assets/phone-calling.svg";
import whatsapp_img from "@/assets/whatsapp.svg";
import FooterVector from "@/assets/footer/FooterContact.svg"
import {
  emailSchema,
  nameSchema,
  textareaSchema,
} from "@/validations/validationSchema.js";
import { sendMail } from "@/apis/sendmail.js";

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const validationSchema = {
    name: nameSchema,
    email: emailSchema,
    message: textareaSchema,
  };
  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const errors = Object.keys(formData)
        .filter((key) => key !== "phone")
        .map((key) => {
          return validateInput(key, formData[key], validationSchema[key]);
        });

      if (errors.some((err) => err === false)) return;

      const response = await sendMail({ ...formData }, "/contact/create/");

      if (response.status === 201) {
        setSuccessMsg("Mail sent successfully");
        setFormData(initialFormState);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateInput = (type, input, schema) => {
    try {
      schema.parse(input);
      setErrorMsg((prevState) => {
        return {
          ...prevState,
          [type]: "",
        };
      });
      return true;
    } catch (err) {
      setErrorMsg((prevState) => {
        return {
          ...prevState,
          [type]: err.errors[0].message,
        };
      });
      errorMsg[type] = err.errors[0].message;
      return false;
    }
  };

  return (
    <div className="min-h-screen  ">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-liches font-bold text-gray-900">Contact Us</h1>
          <p className="mt-2 text-gray-600">
            Reach out anytime, we will respond within 24 hours!
          </p>
        </div>

        <div className="flex md:flex-row flex-col-reverse  justify-evenly gap-8">
          {/* Contact Information */}
          <div className=" p-8 text-left">
            <div className="mb-8">
              <div className="text-xl font-liches text-left  font-semibold border-b-2 italic border-B300 b-6">
                Hello Trekkers Pvt. Ltd.
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <img
                  decoding="async"
                  loading="lazy"
                  width="24px"
                  height="24px"
                  alt="Location Image"
                  src={location_img}
                />
                <div className="">
                  <p className="font-medium text-N300">Address</p>
                  <p className="font-semibold">Kirtipur, Kathmandu</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {/* <Phone className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" /> */}
                <img
                  decoding="async"
                  loading="lazy"
                  width="24px"
                  height="24px"
                  alt="Phone Calling"
                  src={phone_calling}
                />
                <div>
                  <p className="font-medium text-N300">Phone Number</p>
                  <p className="font-semibold">+977-9709707037</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <img
                  decoding="async"
                  loading="lazy"
                  width="24px"
                  height="24px"
                  alt="Whatsapp Image"
                  src={whatsapp_img}
                />
                <div>
                  <p className="font-medium text-N300">WhatsApp/Viber</p>
                  <p className="font-semibold">+977-9709707037</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {/* <Mail className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" /> */}
                <img
                  decoding="async"
                  loading="lazy"
                  width="24px"
                  height="24px"
                  alt="Email Blue"
                  src={email_blue}
                />
                <div>
                  <p className="font-medium text-N300">Email</p>
                  <p className="font-semibold">
                    hellotrekkersnamaste@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <button className="group flex gap-2 items-center px-4 py-2 bg-B75   hover:bg-B100 transition-colors">
                {/* <Phone className="w-4 h-4 mr-2" /> */}
                <span className="text-B75 group-hover:text-B200">
                  <img
                    decoding="async"
                    loading="lazy"
                    width="24px"
                    height="24px"
                    alt="Phone Calling"
                    src={phone_calling}
                  />
                </span>
                Quick Call
              </button>
              <button className="group flex gap-1 items-center px-4 py-2 bg-G75 rounded-md hover:bg-G100 transition-colors">
                {/* <Mail className="w-4 h-4 mr-2" /> */}
                <span className="text-G75 group-hover:text-G200">
                  <img
                    decoding="async"
                    loading="lazy"
                    width="24px"
                    height="24px"
                    alt="Email Green"
                    src={email_green}
                  />
                </span>
                Quick Email
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-G50 p-8 rounded-lg w-full md:w-1/2  text-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              {successMsg && (
                <p className="text-center text-G300">{successMsg}</p>
              )}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-N600"
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="p-2 mt-1 block w-full rounded-md outline outline-N200 shadow-sm focus:outline-B400 outline-2"
                />
                {errorMsg["name"] && (
                  <p className="block text-sm font-medium text-danger">
                    {errorMsg["name"]}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-N600"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@email.com"
                  className="p-2 mt-1 block w-full rounded-md outline outline-N200 shadow-sm focus:outline-B400 outline-2"
                />
                {errorMsg["email"] && (
                  <p className="block text-sm font-medium text-danger">
                    {errorMsg["email"]}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-N600"
                >
                  Phone Number*
                </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="XXXXXXXXXX"
                    className="p-2 mt-1 block w-full rounded-md outline outline-N200 shadow-sm focus:outline-B400 outline-2"
                  />

                {errorMsg["phone"] && (
                  <p className="block text-sm font-medium text-danger">
                    {errorMsg["phone"]}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-N600"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Comment or Questions"
                  className="p-2 mt-1 block w-full rounded-md outline outline-N200 shadow-sm focus:outline-B400 outline-2"
                />
                {errorMsg["message"] && (
                  <p className="block text-sm font-medium text-danger">
                    {errorMsg["message"]}
                  </p>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className={`py-1 px-4 border border-transparent rounded-md shadow-sm font-medium text-white ${
                    isSubmitting ? "bg-B900 cursor-not-allowed" : "bg-B500"
                  } hover:bg-B500 focus:outline-none focus:ring-2 focus:ring-offset-2 `}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting ..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <img src={FooterVector}  alt="Footer Vector Contact Page"  className="w-full" />
         
    </div>
  );
}

export default ContactPage;
