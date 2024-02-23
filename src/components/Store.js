import React from 'react'

const Store = () => {
  return (
    <>
      <section className="bg-fixed bg-center bg-cover relative grid place-items-center  min-h-[460px] uppercase text-5xl font-bold bg-[url(/src/assets/images/location.jpg)]">
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
        <h1 className=" text-white z-[2] text-[40px]">Our Store</h1>
      </section>
     
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '4px',
          padding: '4px',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '4px',
          }}
        >
          <section className=" bg-fixed min-h-[50px] min-w-[20px] bg-[url(/src/assets/images/medplusLogo.webp)]"></section>
          
          <iframe title='Store1'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin" 
            width="300"
            height="200"
            style={{ border: 0, borderRadius: '4px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '4px',
          }}
        >
          <h2 className="text-xl font-bold mb-2">Store 2</h2>
          <iframe title='Store 2'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin"
            width="300"
            height="200"
            style={{ border: 0, borderRadius: '4px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '4px',
          }}
        >
          <h2 className="text-xl font-bold mb-2">Store 3</h2>
          <iframe title='Store 3'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin"
            width="300"
            height="200"
            style={{ border: 0, borderRadius: '4px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '4px',
          }}
        >
          <h2 className="text-xl font-bold mb-2">Store 4</h2>
          <iframe title='Store 4'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin"
            width="300"
            height="200"
            style={{ border: 0, borderRadius: '4px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '4px',
          }}
        >
          <h2 className="text-xl font-bold mb-2">Store 5</h2>
          <iframe title='Store 5'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin"
            width="300"
            height="200"
            style={{ border: 0, borderRadius: '4px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '4px',
          }}
        >
          <h2 className="text-xl font-bold mb-2">Store 6</h2>
          <iframe title='Store 6'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin"
            width="300"
            height="200"
            style={{ border: 0, borderRadius: '4px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '4px',
          }}
        >
          <h2 className="text-xl font-bold mb-2">Store 7</h2>
          <iframe title='Store 7'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin"
            width="300"
            height="200"
            style={{ border: 0, borderRadius: '4px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '4px',
          }}
        >
          <h2 className="text-xl font-bold mb-2">Store 8</h2>
          <iframe title='Store 8'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin"
            width="300"
            height="200"
            style={{ border: 0, borderRadius: '4px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '4px',
          }}
        >
          <h2 className="text-xl font-bold mb-2">Store 9</h2>
          <iframe title='Store 9'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin"
            width="300"
            height="200"
            style={{ border: 0, borderRadius: '4px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '4px',
          }}
        >
          <h2 className="text-xl font-bold mb-2">Store 10</h2>
          <iframe title='Store 10'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin"
            width="300"
            height="200"
            style={{ border: 0, borderRadius: '4px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '4px',
          }}
        >
          <h2 className="text-xl font-bold mb-2">Store 11</h2>
          <iframe title='Store 11'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin"
            width="300"
            height="200"
            style={{ border: 0, borderRadius: '4px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '4px',
          }}
        >
          <h2 className="text-xl font-bold mb-2">Store 12</h2>
          <iframe title='Store 12'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin"
            width="300"
            height="200"
            style={{ border: 0, borderRadius: '4px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '4px',
          }}
        >
          <h2 className="text-xl font-bold mb-2">Store 13</h2>
          <iframe title='Store 13'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin"
            width="300"
            height="200"
            style={{ border: 0, borderRadius: '4px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '4px',
          }}
        >
          <h2 className="text-xl font-bold mb-2">Store 14</h2>
          <iframe title='Store 14'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin"
            width="300"
            height="200"
            style={{ border: 0, borderRadius: '4px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '4px',
          }}
        >
          <h2 className="text-xl font-bold mb-2">Store 15</h2>
          <iframe title='Store 15'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin"
            width="300"
            height="200"
            style={{ border: 0, borderRadius: '4px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </>
            
        
          
  )
}

export default Store 