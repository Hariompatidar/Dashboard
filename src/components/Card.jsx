import React from 'react'

const Card = ({heading, seeall,left, cardData}) => {
  return (
    <div className='smallCard'>
        <div className='w-full flex justify-between items-center py-3 px-4 borderbottom'>
            <p className='text-2xl'>{heading}</p>
            {
                seeall && <p className='underline text-sm'>See all</p>
            }
        </div>
       <div className='flex flex-col gap-2 py-2 px-3'>
       {
            cardData.map(data=>(
                <div key={data.id} className={`flex bg-[#21282C80] py-3 px-5 rounded-sm text-sm justify-between ${left ? "flex-row-reverse":""}`}>
                    <p className='text-sm'>{data.text.length>35 ? data.text.substring(0,35)+'...' : data.text}</p>
                    <div className={`flex items-center gap-1 ${left? "":"w-[150px]"}`}>
                    <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: data.circle }}></div>
                    <p className='text-sm'>{data.text2.length>35 ? data.text2.substring(0,35)+'...' : data.text2}</p>
                    </div>
                </div>
            ))                         
        }
       </div>
    </div>
  )
}

export default Card