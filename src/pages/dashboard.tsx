import React, { useState } from 'react'
import DashboardSidebar from '../components/dashboardSidebar'
import { IoChevronDownOutline } from 'react-icons/io5';
import { RxHamburgerMenu } from "react-icons/rx";

const Dashboard = () => {
    const [sidebar, setSidebar] =  useState<boolean>(false);

  return (
    <div className='flex justify-between'>
        <DashboardSidebar setSidebar={setSidebar} sidebar={sidebar} />
        <div className='flex flex-col bg-[#F3F3F3] xl:w-[82%] md:w-[78%] w-full xl:ml-[18%] md:ml-[22%] h-screen'>
          <div className='px-24 py-16'>
            <div className='flex justify-between items-center'>
              <div>
              <p className='font-semibold text-[18px]'>Good Morning Sullivan! 👋</p>
              <p className='text-[13px] font-[200]'>Today, Wed 26 July 2023</p>
              </div>

            <div className='flex items-center gap-2'>
              <div className='flex items-center bg-white px-2 py-1.5 gap-2 pr-14 rounded-md'>
                <p className='bg-[#F5F5F5] p-1 rounded-md'><IoChevronDownOutline /></p>
                <p className='text-[13px]'>Today</p>
              </div>

              <div className='bg-white px-2 py-2 rounded-md'>
                <p className='p-0.5'>
                <RxHamburgerMenu />
                </p>
              </div>
              </div>
            </div>
          </div>
     </div>
    </div>
  )
}

export default Dashboard