import React from 'react'

const EventCard = ({id, title, itemLocation, description, company, companyLogo, link}) => {

    const handleClick = (link) => {
        window.location.href = link;
    }


  return (
    <div key={id}  className='group group/item singleEvent  lg:w-[290px] p-[20px] bg-white rounded-[10px] 
        hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>

          <span className='flex justify-between items-center gap-4'>
            <h1 className='sm:text-[16px] lg:text-[14px] font-semibold group-hover:text-white text-textColor'>{title}</h1>
           

          </span>
          <h6 className='text-[#ccc]'>{itemLocation}</h6>
          <p className='text-[13px] pt-[20px] mt-[20px] group-hover:text-white border-t-[2px]'>{description}</p>
        
        <div className="company flex items-center gap-2">
          <img src={companyLogo} alt="Company Logo" className='w-[10%]'/>
          <span className='text-[14px] py-[1rem] font-semibold block group-hover:text-white'>{company}</span>
        </div>
        
        <button onClick={() => handleClick(link)} className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] 
        font-semibold text-textColor hover:bg-white group-hover/item:text-white group-hover:text-textColor'>Apply Now</button>

        </div>
  )
}

export default EventCard;