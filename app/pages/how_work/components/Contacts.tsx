import { CONTACTS } from '@/constants'
import Image from 'next/image'

import React from 'react'

const Contacts = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
    <div className="max-container padding-container relative w-full flex justify-end">
      <div className="flex flex-1 lg:min-h-[900px]">
        <Image
          src="/call-now-1426588.png"
          alt="phone"
          width={440}
          height={1000}
          className="feature-phone"
        />
      </div>

      <div className="z-20 flex w-full flex-col lg:w-[60%]">
        <div className='relative'>
          <Image
            src="/camp.svg"
            alt="camp"
            width={50}
            height={50}
            className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
          />
          <h2 className="bold-40 lg:bold-64">How can you talk with us?</h2>
        </div>
        <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
          {CONTACTS.map((contact) => (
            <ContactItem 
              key={contact.title}
              title={contact.title} 
              icon={contact.icon}
              description={contact.description}
            />
          ))}
        </ul>
      </div>
    </div>
  </section>
  )
}


type ContactItem = {
    title: string;
    icon: string;
    description: string;
  }
  
  const ContactItem = ({ title, icon, description }: ContactItem) => {
    return (
      <li className="flex w-full flex-1 flex-col items-start">
        <div className="rounded-full p-4 lg:p-7 bg-red-500">
          <Image src={icon} alt="map" width={28} height={28} />
        </div>
        <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
          {title}
        </h2>
        <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
          {description}
        </p>
      </li>
    )
  }

export default Contacts