import React, { useEffect } from "react";

const ReturnPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="bg-fixed bg-center bg-cover relative grid place-items-center  min-h-[460px] uppercase text-5xl font-bold bg-[url(/src/assets/images/returnpolicy.jpg)]">
        <div
          style={{
            backgroundColor: "transparent",
            backgroundImage:
              "linear-gradient(180deg, #997878 -50%, #000000 100%)",
            opacity: 0.49,
            transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
          }}
          className="absolute top-0 left-0 w-full h-full opacity-50 "
        ></div>
        <h1 className=" text-white z-[2] text-[40px]">
          RETURN & REFUND POLICY
        </h1>
      </section>
      <div className="mb-5 m-2 px-4 pt-3 lg:m-3 lg:px-24">
        <div className="flex flex-col md:flex-row gap-10 ">
        <div className="text-[#434f58] flex flex-col gap-5 mt-5 ">
              <p className="  lg:leading-7">
              We provide a 30-day refund and return policy. We are unable to provide you with a complete refund or exchange if thirty days have gone since your purchase.
              To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
              There are some products that cannot be returned. It is not possible to return perishable items like food, flowers, newspapers, or magazines. Hazardous materials, flammable liquids or gases, and intimate or sanitary products are also not accepted.
              </p>
              <p className="  lg:leading-7">
              Additional non-returnable items:
              </p>
              <ul className="list-disc ml-8">
                <li>Cards as gifts</li>
                <li>Products with software that can be downloaded</li>
                <li>A few personal hygiene and wellness products​</li>
              </ul>
              <p className="  lg:leading-7">
              We need a receipt or other proof of purchase in order to process your return.​
              </p>
              <p className="  lg:leading-7">
              Kindly refrain from returning your product to the manufacturer.
              </p>
              <p className="  lg:leading-7">
              There are some circumstances in which only partial refunds are given:
              </p>
              <ul className="list-disc ml-8">
                <li>book that is clearly used</li>
                <li>An opened CD, DVD, VHS tape, software, video game, cassette tape, or vinyl record.</li>
                <li>Any object that is not in its original state, has pieces missing or is damaged for causes other than our fault.​</li>
                <li>Anything returned more than thirty days following delivery</li>
              </ul>
          <div>
            <h1 className="font-bold text-4xl  text-[#3470a1] text-left">
              Refunds
            </h1>
            <div className="text-[#434f58] flex flex-col gap-5 mt-5">
              <p className="  lg:leading-7">
              We will email you to let you know that we have received your returned item after it has been received and inspected. We will also let you know if your refund is approved or denied.
              </p>
              <p className="lg:leading-7">
              Within a predetermined number of days, if you are accepted, your refund will be processed and a credit will be automatically credited to your credit card or original payment method.
              </p>
              <p className=" lg:leading-7">
                <b>Refunds that are either delayed or absent</b>
                <br></br>First, make sure you have received your return by checking your bank account once more.
              </p>
              <p className="  lg:leading-7">
              Next, get in touch with your credit card provider; it can take some time for the refund to appear on your account.
              </p>
              <p className="  lg:leading-7">
              Next, get in touch with your bank. It usually takes some time for a refund to be posted due to processing.
              </p>
              <p className="  lg:leading-7">
              Please email us at email address if you have followed all of the instructions above and you have still not received your refund.
              </p>
              <p className="  lg:leading-7">
              <b>Items on sale</b><br></br>You can only get a refund on standard priced items. There are no refunds on sale items.
              </p>
              <h1 className="font-bold text-4xl  text-[#3470a1] text-left">
              Exchanges
              </h1>
              <p className="  lg:leading-7">
              Items are only replaced if they are faulty or broken. Please email us at email address and send your item to physical address if you need to exchange it for the same item.
              </p>
              <h1 className="font-bold text-4xl  text-[#3470a1] text-left">
              Gifts
              </h1>
              <p className="  lg:leading-7">
              You will be given a gift credit for the amount of your return if the item was shipped directly to you after being purchased and tagged as a gift. You will receive a gift certificate in the mail after the returned item is received.
              </p>
              <p className="  lg:leading-7">
              We will provide the gift giver a refund and let them know about your return if the item wasn't marked as a gift when it was bought or if they had the order shipped to them so they could give it to you later.
              </p>
              <h1 className="font-bold text-4xl  text-[#3470a1] text-left">
              Shipping returns
              </h1>
              <p className="  lg:leading-7">
              You should mail your merchandise to: physical address in order to return it.
              </p>
              <p className="  lg:leading-7">
              When returning an item, you will be responsible for covering the cost of shipping yourself. The cost of shipping is not refundable. The cost of return postage will be subtracted from your refund if you are eligible for one.
              </p>
              <p className="  lg:leading-7">
              The time it takes for your replaced merchandise to arrive may differ depending on where you reside.
              </p>
              <p className="  lg:leading-7">
              You might think about getting shipping insurance or utilising a trackable shipping service if you are returning more expensive things. We make no promises as to when we will get your returned goods.
              </p>
              <h1 className="font-bold text-4xl  text-[#3470a1] text-left">
              Need help?
              </h1>
              <p className="  lg:leading-7">
              For inquiries concerning returns and refunds, send us an email at email.
              </p>
            </div>
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default ReturnPolicy;
