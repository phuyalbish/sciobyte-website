import  {  useState, useEffect } from "react";
import aashish from "@/assets/aashish.jpeg";
import { FaWhatsapp } from "react-icons/fa";
import { getExchangeRates } from "@/apis/exchangeRate.js";
import FooterVector from "@/assets/footer/FooterContact.svg"


import { sendCreateMail } from "@/apis/sendmail.js";
function CreatePage() {

  const [exchangeRate, setExchangeRate] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await getExchangeRates();
      setExchangeRate(response);
    })();
  }, []);

  console.log(exchangeRate)

  const today = new Date().toISOString().split("T")[0];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState(1);

  useEffect(() => {
  if (amount && fromCurrency) {
    const selectedCurrency = exchangeRate.find(item => item.id === fromCurrency);
    const rate = selectedCurrency?.rate || 0;

    const budget = parseFloat((amount * rate).toFixed(2));
    setFormData((prev) => ({
      ...prev,
      budget: budget,
    }));
  } else {
    setFormData((prev) => ({
      ...prev,
      budget: 0,
    }));
  }
}, [amount, fromCurrency]);
  
  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    country: "",
    date: "",
    traveltype: "",
    travellocation: "",
    duration: "",
    totalpeople: "",
    totalchild: "",
    accomodation: "",
    budget: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormState);


  const handleSubmit = async () => {
    try {
      const response = await sendCreateMail({ ...formData });

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

  return (
    <>
    <div className="flex flex-col gap-10 mt-5 w-full md:px-[4rem] mb-20 px-4 md:p-0">
        <div className="text-center flex flex-col gap-1">
          <h1 className="text-2xl font-liches font-bold text-gray-900">Create your Trip</h1>
          <p className="text-N500">
            Customize what works for You
          </p>
        </div>

        <div className="flex md:flex-row flex-col   justify-evenly gap-8">
         

          <div className="relative  rounded-lg md:w-2/3  text-left">

            <form onSubmit={handleSubmit} className="space-y-6 w-full">
              {successMsg && (
                <p className="text-center text-G300">{successMsg}</p>
              )}
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6 w-full">
                    <div className="text-base font-semibold">Personal Details</div>
                        <div className="grid  w-full grid-cols-2  gap-6">
                          <div className="w-full flex flex-col gap-1">
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-N700"
                            >
                              Full Name*
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                              className="p-2  block w-full rounded-md outline outline-N200 shadow-sm focus:outline-B400 outline-2"
                            />
                          </div>
                          
                          <div className="w-full  flex flex-col gap-1">
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-N700"
                            >
                              Email*
                            </label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@gmail.com"
                                className="p-2  block w-full rounded-md outline outline-N200 shadow-sm focus:outline-B400 outline-2"
                              />

                          </div>
                          <div className="w-full  flex flex-col gap-1">
                            <label
                              htmlFor="phone"
                              className="block text-sm font-medium text-N700"
                            >
                              Phone Number*
                            </label>
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData?.phone}
                                onChange={handleChange}
                                placeholder="+XXX XXXXXXXXXX"
                                className="p-2  block w-full rounded-md outline outline-N200 shadow-sm focus:outline-B400 outline-2"
                              />

                          </div>
                          <div className="w-full  flex flex-col gap-1">
                            <label
                              htmlFor="country"
                              className="block text-sm font-medium text-N700"
                            >
                             Your Country*
                            </label>
                            <input
                              type="text"
                              id="country"
                              name="country"
                              required
                              value={formData?.country}
                              onChange={handleChange}
                              placeholder="Country"
                              className="p-2  block w-full rounded-md outline outline-N200 shadow-sm focus:outline-B400 outline-2"
                            />
                            
                          </div>
                        </div>
                </div>

                <div className="flex flex-col gap-6 w-full">
                    <div className="text-base font-semibold">Trip Details</div>
                          <div className="grid  w-full grid-cols-1 md:grid-cols-2  gap-6">
                              <div className="w-full  flex flex-col gap-1">
                                <label
                                  htmlFor="traveltype"
                                  className="block text-sm font-medium text-N700"
                                >
                                  Your Travel Type*
                                </label>
                                <div className="px-2   w-full rounded-md outline outline-2 outline-N200 shadow-sm focus:outline-B400">
                                <select
                                  id="traveltype"
                                  name="traveltype"
                                  value={formData?.traveltype}
                                  onChange={handleChange}
                                  className="w-full py-3 outline-none"
                                >
                                  <option value="adventure">Trek</option>
                                  <option value="leisure">Day Hike</option>
                                  <option value="business">Tour</option>
                                </select>
                                </div>
                                
                              </div>
                              <div className="w-full  flex flex-col gap-1">
                                <label
                                  htmlFor="date"
                                  className="block text-sm font-medium text-N700"
                                >
                                  Approx. Date of Travel*
                                </label>
                                  <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    required
                                     min={today}
                                    value={formData?.date}
                                    onChange={handleChange}
                                    className="p-2  block w-full rounded-md outline outline-N200 shadow-sm focus:outline-B400 outline-2"
                                  />
                              </div>
                              <div className="w-full  flex flex-col gap-1">
                                <label
                                  htmlFor="travellocation"
                                  className="block text-sm font-medium text-N700"
                                >
                                  Your Prefered Travel Location*
                                </label>
                                <div className="px-2   w-full rounded-md outline outline-2 outline-N200 shadow-sm focus:outline-B400">
                                <select
                                  id="travellocation"
                                  name="travellocation"
                                  value={formData?.travellocation}
                                  onChange={handleChange}
                                  className="w-full py-3 outline-none"
                                >
                                  <option value="adventure">Don't know yet!</option>

                                  <option value="adventure">Manaslu</option>
                                  <option value="leisure">Annapurna</option>
                                  <option value="business">Everest</option>
                                </select>
                                </div>
                               
                              </div>
                              <div className="w-full  flex flex-col gap-1">
                                <label
                                  htmlFor="duration"
                                  className="block text-sm font-medium text-N700"
                                >
                                  Approximate Duration*
                                </label>
                                <input
                                  type="number"
                                  id="duration"
                                  name="duration"
                                  required
                                  value={formData?.duration}
                                  onChange={handleChange}
                                  min="1"
                                  max="20"
                                  placeholder="10 days"
                                  className="p-2  block w-full rounded-md outline outline-N200 shadow-sm focus:outline-B400 outline-2"
                                />
                                
                              </div>
                              <div className="w-full  flex flex-col gap-1">
                                <label
                                  htmlFor="travellocation"
                                  className="block text-sm font-medium text-N700"
                                >
                                  Your Prefered Accomodation Type*
                                </label>
                                <div className="px-2   w-full rounded-md outline outline-2 outline-N200 shadow-sm focus:outline-B400">
                                <select
                                  id="travellocation"
                                  name="travellocation"
                                  required
                                  value={formData?.travellocation}
                                  onChange={handleChange}
                                  className="w-full py-3 outline-none"
                                >
                                  <option value="adventure">Don't know yet!</option>

                                  <option value="adventure">Tea House/ Lodge</option>
                                  <option value="leisure">HomeStay</option>
                                  <option value="business">Camping</option>
                                </select>
                                </div>
                                
                              </div>
                              <div className="flex gap-4 w-full flex-grow">

                                  <div className="w-full  flex flex-col gap-1">
                                    <label
                                      htmlFor="totalpeople"
                                      className="block text-sm font-medium text-N700"
                                    >
                                      No. of People*
                                    </label>
                                    <input
                                          type="number"
                                          id="totalpeople"
                                          name="totalpeople"
                                          required
                                          value={formData?.totalpeople}
                                          onChange={handleChange}
                                          min="1"
                                          max="20"
                                          placeholder="1 - 20 People"
                                          className="p-2 block w-full rounded-md outline outline-N200 shadow-sm focus:outline-B400 outline-2"
                                        />
                                  </div>
                                  <div className="w-full  flex flex-col gap-1">
                                    <label
                                      htmlFor="totalchild"
                                      className="block text-sm font-medium text-N700"
                                    >
                                      No. of Child
                                    </label>
                                    <input
                                      type="number"
                                      id="totalchild"
                                      name="totalchild"
                                      min="0"
                                      max="20"
                                      required
                                      value={formData?.totalchild}
                                      onChange={handleChange}
                                      placeholder="0 - 20 Child"
                                      className="p-2  block w-full rounded-md outline outline-N200 shadow-sm focus:outline-B400 outline-2"
                                    />
                                   
                                  </div>

                              </div>
                              <div className="w-full  flex flex-col gap-1">
                                <label
                                  htmlFor="budget"
                                  className="block text-sm font-medium text-N700"
                                >
                                  Approximate Budget Per Person*
                                </label>
                                <input
                                  type="number"
                                  id="budget"
                                  name="budget"
                                  min="500"
                                  max="5000"
                                  required
                                  value={formData?.budget}
                                  onChange={handleChange}
                                  placeholder="500 USD - 5000 USD"
                                  className="p-2  block w-full rounded-md outline outline-N200 shadow-sm focus:outline-B400 outline-2"
                                />
                               
                              </div>

                            <div className="flex flex-col  w-full  gap-1">
                               <label
                                  htmlFor="selectcurrency"
                                  className="block text-sm font-medium text-N700"
                                >
                                 Convert from your currency to USD
                                </label>
                                <div className="flex gap-4 items-center">
                                  <div className="px-2  w-1/4 rounded-md outline outline-2 outline-N200 shadow-sm focus:outline-B400">
                                      <select
                                        id="selectcurrency"
                                        name="selectcurrency"
                                        value={fromCurrency}
                                        onChange={(e) => setFromCurrency(Number(e.target.value))} 
                                        className="py-3  pr-2 outline-none text-sm"
                                      >
                                       {exchangeRate.map((item) => (
                                        <option key={item?.id} value={item?.id}>
                                          {item.currency}
                                        </option>
                                      ))}
                                      </select>
                                  </div>
                                <div className="w-full">
                                  <input
                                    type="number"
                                    id="currency"
                                    name="currency"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder="Budget in your Currency"
                                    className="p-2 block w-full rounded-md outline outline-N200 shadow-sm focus:outline-B400 outline-2"
                                  />
                                </div>
                                </div>
                              </div>
                              </div>
                                <div className="w-full  flex flex-col gap-1">
                                  <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-N700"
                                  >
                                    Feel free to share more
                                  </label>
                                  <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Write your message or queries.."
                                    className="p-2  block w-full rounded-md outline outline-N200 shadow-sm focus:outline-B400 outline-2"
                                  />
                                </div>
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
              </div>
            </form>
          </div>
          <div className=" p-4 text-left md:w-1/3 flex flex-col justify-center md:items-start items-center bg-G100 rounded-lg h-fit gap-4">
                  <div className="text-base font-light">Trip planning got you stressed?</div>
                  <div className="text-md font-semibold">Talk with our Advisor</div>
                  <img src={aashish} alt="" className="w-48 rounded-lg aspect-square object-cover" />
                  <div className="text-md font-semibold">Aashish Regmi</div>
                  <a

                  aria-label="Whatsapp"
                  href={`https://web.whatsapp.com/send?phone=+9779849828857&text=Hello Aashish, Let's Plan a Trip.`}
                  target="_blank"
                  className="rounded-lg bg-G600 w-fit hover:bg-G700 text-white text-base cursor-pointer flex justify-center gap-3 items-center py-3 px-4"
                >
                  <FaWhatsapp className="text-lg"/>
                  +977-9709707037
                </a>

                  <div className="text-base font-medium">or  <a className="hover:underline underline-offset-2 cursor-pointer">Schedule a call</a></div>
                

          </div>
        </div>
      </div>
      <img src={FooterVector}  alt="Footer Vector Contact Page"  className="w-full" />
         
      </>
  );
}

export default CreatePage;
