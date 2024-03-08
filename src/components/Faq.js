import React, { useState } from 'react';

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-[#434F58] text-center font-serif">
      <p className="text-5xl my-8">Frequently Asked Questions</p>
      <div className="max-w-2xl mx-auto">
        {faqData.map((item, index) => (
          <div key={index} className="my-4">
            <div
              className={`cursor-pointer p-4 ${
                activeIndex !== index ? 'border-b' : ''
              } hover:text-[#61CE70] rounded-t-md`}
              onClick={() => toggleAccordion(index)}
            >
              <p className=" font-semibold text-lg ">{item.question}</p>
            </div>
            {activeIndex === index && (
              <div className="p-4  rounded-md">
                <p className="border-b text-sm text-[#434F58]">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const faqData = [
  {
    question: 'How can I place a prescription order at Mediplus Pharmacy?',
    answer:
      'To place a prescription order at Mediplus Pharmacy, fill out their upload prescription form or visit their store in person with your prescription.',
  },
  {
    question: 'Is it safe to order medications online?',
    answer:
      'Of course! Every medication and product that is sold on our platform is carefully examined to ensure that it is genuine and of high quality. In order to guarantee that you receive only the best products, our staff adheres to stringent safety procedures when delivering the medications.',
  },
  {
    question: 'Does Pharmville Pharmacy offer expedited shipping?',
    answer:
      'Yes, in accordance with the city in which you live. Orders can be delivered in as little as an hour in some cities. Please be aware that other factors, such as staff availability and medicine availability, may affect the expedited deliveries.',
  },
  {
    question: 'How can I purchase goods from Pharmville Pharmacy?',
    answer:
      'In the event that your order is delayed for any reason, our staff will notify you via phone, email, or SMS. By selecting the "Order Status" button on the app or website, you may also see the current status of your order.',
  },
  {
    question: "Can I check the status of my order's delivery? If so, how?",
    answer: "You can click on the 'My Orders' area under the 'My Account' button to keep track of your order. Next, choose the specific order to view its current status.",
  },
  {
    question: 'Does Pharmville Pharmacy deliver medications to homes?',
    answer:
      'Yes, Pharmville Pharmacy offers the quickest medication delivery service to homes.',
  },
  {
    question: 'Does Pharmville Pharmacy deliver orders for medications ordered online the same day?',
    answer:
      'Indeed, Pharmville Pharmacy offers same-day delivery for orders placed online.',
  },
  {
    question: 'Who should I get in touch with if I have any questions about payments?',
    answer:
      'If you have any problems making the payment, you can send us an email at onlinehelpdesk@medipluspharmacy.org.',
  },
  {
    question: 'My order is missing a few of my medications. How should I proceed?',
    answer:
      'Please send us an email at onlinehelpdesk@medipluspharmacy.org with the invoice and photos of every item you received, and we will investigate further.',
  },
  {
    question: 'Why was my prescription turned down?',
    answer:
      "The following causes may result in the rejection of your prescriptions: The prescription is no longer valid (it was issued six months ago). The prescription's image is not very clear.",
  },
  {
    question: 'How can I get my e-prescription?',
    answer:
      'Click the (↑) download button to access your e-prescription that was created during an online consultation.',
  },
  {
    question: 'How can I track my order?',
    answer:
      "Simply click 'Buy Medicines' and then 'My Orders' to keep track of your order. After choosing the order, click 'Track Order.' Your order's status will be displayed to you.",
  },
];

export default FAQComponent;
