import React from 'react'
import { HiUsers } from "react-icons/hi";
import { IoLogOut } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { Link } from 'react-router-dom';
import { images } from "../theme";
import { MdKeyboardCommandKey } from "react-icons/md";

interface dashboardSidebarProps {
    sidebar: boolean;
    setSidebar: any;
}


function DashboardSidebar({setSidebar, sidebar}:dashboardSidebarProps) {

    const url = window.location.pathname
    // console.log('url', url)

    const navItem = [
        {
            name:'Home',
            url: '/',
            icon: images.home,
            count:'8'
        },
        {
            name:'Completed',
            url: '#',
            icon: images.square,
            count:'16'
        },
        {
            name:'Personal',
            url: '#',
            icon: images.square,
            count:'4'
        },
        {
            name:'Work',
            url: '#',
            icon: images.square,
            count:'6'
        },
        {
            name:'Diet',
            url: '#',
            icon: images.biceps,
            count:'3'
        },
        {
            name:'List of Books',
            url: '#',
            icon: images.books,
            count:'8'
        },
        {
            name:'Road trip list',
            url: '#',
            icon: images.car,
            count:'6'
        },
        
    ]

  return (
    <>
        {/* Mobile sidebar */}
        <div className={`${sidebar ? 'md:hidden flex' : ' hidden'} md:hidden bg-white w-[45%] h-screen fixed flex-col z-50`}>
            <div className='flex flex-col justify-between relative h-screen'>
                <div className='flex justify-center items-center py-4 h-[70px]'>
                    {/* <img src={logo} alt='logo' className='w-[50%]'/> */}
                </div>
                <div className='h-[90%] hover:overflow-y-auto overflow-y-hidden mt-4'>
                {url == '/' ? 
                navItem.slice(0, 3).map((item)=>( 
                    <Link to={item.url} className={`text-[13px] text-[#61616A] flex item-center gap-2 font-medium cursor-pointer ${item.url == url ? 'bg-[#CDFC54] border-r-4 border-[#121220]' : '' } lg:px-6 px-4 py-3 mt-2`}>
                        {item.name == 'Users' ? <HiUsers  className='text-[16px] mt-0.5'/> : 
                        <img src={item.icon} alt='icon' className='w-[9%]'/>}  {item.name}
                    </Link>
                    )) : 
                navItem.map((item)=>( 
                    <Link to={item.url} className={`text-[13px] text-[#61616A] flex item-center gap-2 font-medium cursor-pointer ${item.url == url ? 'bg-[#CDFC54] border-r-4 border-[#121220]' : '' } lg:px-6 px-4 py-3 mt-2`}>
                        {item.name == 'Users' ? <HiUsers  className='text-[16px] mt-0.5'/> : 
                        <img src={item.icon} alt='icon' className='w-[9%]'/>}  {item.name}
                    </Link>
                    ))
                }
                </div>

                <div className='my-10 mt-20 lg:px-6 px-4 cursor-pointer'>
                    <div className='flex items-center gap-2'>
                        <IoMdSettings  className='text-[#52525A]'/>
                        <p className='text-[13px] text-[#61616A] font-medium'>Settings</p>
                    </div>

                    <div className='flex items-center gap-2 mt-2'>
                        <IoLogOut className='text-[#52525A]'/>
                        <p className='text-[13px] text-[#61616A] font-medium'>Log out</p>
                    </div>
                </div>
            </div>
        </div>

        {/* pc view sidebar */}
        <div className='hidden md:flex bg-white xl:w-[18%] w-[22%] h-screen fixed flex-col'>
            <div className='flex flex-col justify-between relative h-screen'>
                <Link to='/' className='p-6 h-[50px] text-[18px] font-semibold'>
                    Private
                </Link>

                <div className='h-[90%] hover:overflow-y-auto overflow-y-hidden mt-4'>
                    {navItem.map((item)=>( 
                        <Link to={item.url} className={`text-[13px] font-bold text-[#4f4f52] flex justify-between item-center gap-2 cursor-pointer ${item.url == url ? 'bg-[#F5F5F5]' : '' } mx-4 p-2 rounded-xl mt-1`}>
                            
                            <div className='flex items-center justify-center gap-2'>
                                <p>
                                    {item.name == 'Users' ? <HiUsers  className='text-[16px] mt-0.5'/> : 
                                    <img src={item.icon} alt='icon' className='w-[16px] h-[16px]'/>} 
                                </p> {item.name}
                            </div>
                            <p className={`${item.url == url ? 'bg-white' : 'bg-[#F5F5F5]'} p-1 rounded-full h-[20px] w-[20px] text-center flex items-center justify-center`}>
                            {item.count}
                            </p>
                        </Link>
                        ))
                    }
                    <div className='flex justify-between items-center bg-[#F5F5F5] rounded-xl mx-4 px-2 py-1 mt-6 cursor-pointer'>
                        <div className='flex items-center gap-2'>
                            <p className='font-bold'>+</p>
                            <p className='text-[13px] font-semibold'>Create new list</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <p className={`bg-[#e7e6e6] font-medium p-1 text-[13px] text-[#999898] rounded-full h-[20px] w-[20px] text-center flex items-center justify-center`}>
                            <MdKeyboardCommandKey className='font-semibold' />
                            </p>
                            <p className={`bg-[#e7e6e6] font-semibold p-1 text-[13px] text-[#999898] rounded-full h-[20px] w-[20px] text-center flex items-center justify-center`}>
                                L
                            </p>
                        </div>
                    </div>
                </div>

                <div className='2xl:h-[90%] h-[73%] hover:overflow-y-auto overflow-y-hidden pb-10'>
                    <p className='p-6 h-[50px] text-[18px] font-semibold'>
                        Group
                    </p>

                    <div className='flex gap-2 items-center px-4 py-2 cursor-pointer'>
                        <div className=' lg:w-[50%] w-full'>
                        <div className='bg-[#F5F5F5] h-[110px] relative'>
                            <img src={images.avatar} alt='icon' className='w-[36px] h-[36px] absolute top-[20px] left-[20px] z-10'/>
                            <img src={images.avatar2} alt='icon' className='w-[36px] h-[36px] absolute top-[20px] left-[50px]'/>
                            <img src={images.avatar3} alt='icon' className='w-[36px] h-[36px] absolute top-[47px] left-[5px]'/>
                            <img src={images.avatar4} alt='icon' className='w-[36px] h-[36px] absolute top-[47px] left-[37px]'/>
                            <img src={images.avatar5} alt='icon' className='w-[36px] h-[36px] absolute top-[47px] left-[68px]'/>
                        </div>
                         <p className='font-semibold text-[13px] mt-1'>Mobal Project</p>
                         <p className='font-semibold text-[12px] mt-1 text-[#c9c7c7] leading-[2px]'>5 People</p>
                        </div>
                        <div className=' lg:w-[50%] w-full'>
                            <div className='bg-[#F5F5F5] h-[110px] relative'>
                                <img src={images.avatar} alt='icon' className='w-[36px] h-[36px] absolute top-[20px] lg:left-[20px] left-[10px] z-10'/>
                                <img src={images.avatar6} alt='icon' className='w-[36px] h-[36px] absolute top-[20px] lg:left-[50px] left-[40px]'/>
                                <img src={images.avatar7} alt='icon' className='w-[36px] h-[36px] absolute top-[47px] lg:left-[20px] left-[12px]'/>
                                <img src={images.avatar4} alt='icon' className='w-[36px] h-[36px] absolute top-[47px] lg:left-[52px] left-[42px]'/>
                            </div>
                            <p className='font-semibold text-[13px] mt-1'>Futur Project</p>
                         <p className='font-semibold text-[12px] mt-1 text-[#c9c7c7] leading-[2px]'>4 People</p>
                        </div>
                    </div>
                    
                    <div className='flex justify-between items-center bg-[#F5F5F5] rounded-xl mx-4 px-2 py-1 mt-6 cursor-pointer'>
                        <div className='flex items-center gap-2'>
                            <p className='font-bold'>+</p>
                            <p className='text-[13px] font-semibold'>Create new group</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <p className={`bg-[#e7e6e6] font-medium p-1 text-[13px] text-[#999898] rounded-full h-[20px] w-[20px] text-center flex items-center justify-center`}>
                            <MdKeyboardCommandKey className='font-semibold' />
                            </p>
                            <p className={`bg-[#e7e6e6] font-semibold p-1 text-[13px] text-[#999898] rounded-full h-[20px] w-[20px] text-center flex items-center justify-center`}>
                                G
                            </p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </>
  )
}

export default DashboardSidebar