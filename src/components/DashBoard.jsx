import React from "react";
import Logo from "../assets/Logo.svg";
import Barchart from "../assets/bar-chart-2.svg";
import Layers from "../assets/3-layers.svg";
import Users from "../assets/users.svg";
import Message from "../assets/solar_chat-line-broken.svg";
import Setting from "../assets/settings.svg";
import Avatar from "../assets/Avatar.png";
import Logout from "../assets/log-out.svg";
import Search from "../assets/Search Icon.svg";
import Notification from "../assets/notification.svg";
import Plus from "../assets/plus.svg";
import Person from "../assets/person.svg";
import Basil from "../assets/basil.svg";
import Bookmark from "../assets/bookmark.svg";
import Eye from "../assets/carbon_view.svg";
import Card from "./Card";

const smallCardData=[
    {
        id:1,
        number:"07",
        text:"Active Projects",
        icon:Person
    },
    {
        id:2,
        number:"04",
        text:"Proposals",
        icon:Basil
    },
    {
        id:3,
        number:"03",
        text:"Active Jobs",
        icon:Bookmark
    },
    {
        id:4,
        number:"240",
        text:"Application",
        icon:Eye
    }
]

const cardData=[
    {
        id:1,
        text:"Thermal protective performance and mult",
        circle:"#FDD26E",
        text2:"Resume review"
    },
    {
        id:2,
        text:"Effect of heat flux and moisture content on the thermal protective performance of outer layer of fire pro",
        circle:"#CD7849",
        text2:"Interview"
    },
    {
        id:3,
        text:"Thermal protective performance and mult",
        circle:"#73C2B4",
        text2:"Task"
    },
    {
        id:4,
        text:"Testing and evaluation of functional textiles",
        circle:"#44C677",
        text2:"Payment"
    },
    {
        id:5,
        text:"Development of thermal liner for Extreme Heat Protective Clothing",
        circle:"#D9D9D9",
        text2:"Closed"
    },
    {
        id:6,
        text:"Testing and evaluation of functional textiles",
        circle:"#44C677",
        text2:"Payment"
    }
]

const cardData2=[
    {
        id:1,
        text2:"Interview is scheduled for 12PM",
        circle:"#73C2B4",
        text:"6:29PM"
    },
    {
        id:1,
        text2:"Applicant applied on Technical researcher",
        circle:"#FDD26E",
        text:"8:21PM"
    },
    {
        id:1,
        text2:"Interview is cancelled",
        circle:"#CD7849",
        text:"6:29PM"
    },
    {
        id:1,
        text2:"Applicant applied on Technical researcher",
        circle:"#FDD26E",
        text:"6:29PM"
    },
    {
        id:1,
        text2:"Recieved Proposal",
        circle:"#44C677",
        text:"6:29PM"
    },
    {
        id:1,
        text2:"Interview is scheduled for 12PM",
        circle:"#44C677",
        text:"6:29PM"
    },
]

const DashBoard = () => {
    return (
        <div className="w-full h-full text-white bg-[#1F2129] flex">
            {/* first main section */}
            <div className="flex h-screen fixed flex-col gap-3 w-[20%] py-4 px-8 text-sm border1 ">
                {/* Logo div  */}
                <div>
                    <img src={Logo} alt="Reslink" loading="lazy" />
                </div>

                {/* Navlinks */}
                <div className="flex h-full flex-col justify-between">
                    <div className="flex flex-col justify-between  w-full">
                        <div className="p-3 bg-[#101215] flex items-center rounded-md gap-3">
                            <img src={Barchart} alt="Reslink" loading="lazy" />
                            <p>DashBoard</p>
                        </div>

                        <div className="p-3  flex items-center rounded-md gap-3">
                            <img src={Layers} alt="Reslink" loading="lazy" />
                            <p>Projects</p>
                        </div>

                        <div className="p-3 flex items-center rounded-md gap-3">
                            <img src={Users} alt="Reslink" loading="lazy" />
                            <p>Staffing</p>
                        </div>

                        <div className="p-3 flex items-center rounded-md gap-3">
                            <img src={Message} alt="Reslink" loading="lazy" />
                            <p>Messages</p>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <div className="p-3  flex items-center rounded-md gap-3">
                            <img src={Barchart} alt="Reslink" loading="lazy" />
                            <p>Support</p>
                        </div>

                        <div className="p-3  flex items-center rounded-md gap-3">
                            <img src={Setting} alt="Reslink" loading="lazy" />
                            <p>Settings</p>
                        </div>
                    </div>
                </div>

                <div className="h-[1px] w-full borderColor"></div>

                {/* user profile div  */}
                <div className="flex gap-2  text-sm">
                    <img
                        src={Avatar}
                        alt="Reslink"
                        loading="lazy"
                        className="rounded-full"
                    />
                    <div>
                        <p className="font-bold">Olivia Rhye</p>
                        <p>olivia@untitledui.com</p>
                    </div>
                    <img src={Logout} alt="Reslink" loading="lazy" />
                </div>
            </div>

            {/* second main section */}
            <div className="ml-[20%] w-[80%] text-sm pt-8">
                {/* heading section  */}
                <div className="w-full flex justify-between px-8">
                    <div className="flex gap-2 bg-[#101215] px-4 py-2 rounded-3xl">
                        <img src={Search} alt="Reslink" loading="lazy" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="appearance-none bg-transparent focus:outline-none w-[250px] pl-2"
                        />
                    </div>
                    <div className="flex gap-2">
                        <img src={Notification} alt="Reslink" loading="lazy" />
                        <div className="flex gap-2 px-5 py-2 bg-[#3FA268] rounded-3xl max-w-max">
                            <img src={Plus} alt="Reslink" loading="lazy" />
                            <p>Create New Project</p>
                        </div>
                    </div>
                </div>

                {/* welcome section  */}
                <div className="px-8 py-4">
                    <p className="text-[30px] leading-9">Welcome back, Olivia</p>
                    <p className="text-[16px] leading-6">Track, manage researchers and submissions.</p>
                </div>

                {/* small card section  */}
                <div className="flex py-4 px-8 gap-3 flex-wrap">
                    {
                        smallCardData.map(card=>(
                            <div key={card.id} className="flex items-center justify-between smallCard p-6 w-[24%]">
                                <div>
                                    <p className="text-4xl">{card.number}</p>
                                    <p className="text-base">{card.text}</p>
                                </div>
                                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#3FA268]">
                                <img src={card.icon} alt="Reslink" loading="lazy" />
                                </div>
                                
                            </div>
                        ))
                    }
                </div>

                {/* bigger cards section  */}
                <div className="flex gap-3 px-8 pb-8">
                <div className="w-[49.2%] min-w-[380px]">
                    <Card heading={"Posted Projects"} seeall={true} left={false} cardData={cardData}/>
                </div>
                <div className="w-[49.2%] min-w-[380px]">
                    <Card heading={"Recent Activities"} seeall={false} left={true} cardData={cardData2}/>
                </div>
                </div>

                {/* footer section  */}
                <div>
                    <p className="text-sm opacity-40 borderColor px-8 py-4">Copyright © 2023. Reslink. All rights reserved.</p>
                </div>
            </div>


        </div>
    );
};

export default DashBoard;
