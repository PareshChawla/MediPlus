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
          <div>
            <h1 className="font-bold text-4xl  text-[#3470a1] text-left">
              Refunds
            </h1>
            <div className="text-[#434f58] flex flex-col gap-5 mt-5">
              <p className="  lg:leading-7">
                Once your return is received and inspected, we will send you an
                email to notify you that we have received your returned item. We
                will also notify you of the approval or rejection of your
                refund.
              </p>
              <p className="lg:leading-7">
                If you are approved, then your refund will be processed, and a
                credit will automatically be applied to your credit card or
                original method of payment, within a certain amount of days.
              </p>
              <p className=" lg:leading-7">
                <b>Late or missing refunds</b>
                <br></br>If you haven’t received a refund yet, first check your
                bank account again.
              </p>
              <p className="  lg:leading-7">
                Then contact your credit card company, it may take some time
                before your refund is officially posted.
              </p>
              <p className="  lg:leading-7">
              Next contact your bank. There is often some processing time before a refund is posted.
              </p>
              <p className="  lg:leading-7">
              If you’ve done all of this and you still have not received your refund yet, please contact us at email address.
              </p>
              <p className="  lg:leading-7">
              <b>Sale items</b><br></br>Only regular priced items may be refunded. Sale items cannot be refunded.
              </p>
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default ReturnPolicy;
