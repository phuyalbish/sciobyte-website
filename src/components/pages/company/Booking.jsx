import homeStay from "@/assets/homestay.png";
import instagramLogo from "@/assets/instagram-logo.png";

const HomeStay = () => {
  return (
    <>
      <div id="booking" className="flex flex-col px-5 md:px-[4rem] max-w-[100em] mx-auto gap-5">
        <div className="text-xl font-liches text-left rounded-lg font-semibold">
          Booking and Payments
        </div>
      <div className="text-left flex flex-col gap-10">
            <p>
              Hello Trekkers! Embark on an unforgettable journey through the majestic Himalayas and Nepal’s rich cultural heritage with us—your trusted adventure travel partner. As a fully licensed and government-certified trekking agency, we are committed to delivering high-quality service and responsible tourism.
            </p>
           <div className="flex flex-col gap-2">
            <p className="font-semibold text-md">Payment Methods</p>
           <p>Once your trip request is confirmed, the next step is to secure your booking by making the necessary payment as per our company’s terms and conditions. We offer multiple payment options, including bank transfers and credit card payments (Visa or MasterCard), ensuring a smooth and secure transaction process. Upon receiving your payment, we will send a confirmation email with all the necessary details.
            </p>
           </div>
            
           <div className="flex flex-col gap-2">
            <p className="font-semibold text-md">Payment by Credit Card (Visa or MasterCard)</p>
            <p>For online payments, simply select your preferred trip package, click on "Book This Trip," and proceed with the advance payment as specified for your chosen trek.
            </p>

           <p> <span className="font-semibold"> 💳 Please note: A 4% transaction fee</span>applies to all credit card payments, including deposits and trip extensions. To avoid additional charges, we recommend making payments in cash where possible.
           </p>

            </div>

           <div className="flex flex-col gap-2">
          <p className="font-semibold text-md">Payment via Bank Transfer</p>
          <p>For those preferring a direct bank transfer, please use the official bank details below. Ensure that any additional bank service charges are covered on your end to avoid discrepancies in the final payment.
            </p>

            <p className="font-semibold">Bank Details:</p>
            <p>✅ Beneficiary Bank: NEPAL INVESTMENT MEGA BANK LTD.</p>
            <p>✅ Bank Address:  Thamel, Kathmandu, Nepal</p>
            <p>✅ Beneficiary Name: HELLO TREKKERS PRIVATE LIMITED</p>
            <p>✅ USD Account No: 13201040253246</p>
            <p>✅ SWIFT Code: NIBLNPKT</p>
            </div>

           <div className="flex flex-col gap-2">
            <p className="font-semibold text-md">
            Payment via the Western Union
            </p>
            <p> We also accept payments via Western Union Money Transfer for added convenience. If you prefer this method, please contact us, and we will provide the necessary details via email.
           </p>
            <p>Note: Bank service charges related to submitting a deposit are the responsibility of the client.
            </p>
           <p> For any payment-related queries or assistance, feel free to reach out—we’re here to make your booking process seamless and hassle-free!
            </p>  
            </div>          
      </div>
      </div>
    </>
  );
};

export default HomeStay;
