import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
     {
        title: "One App. Infinite Possibilities.",
        description: "Manage your lifestyle, business, and earnings—all in one powerful app. INFLU is your single platform for shopping, learning, earning, and growing.",
        bullets: [
            {
                title: "Shop Products & Book Services",
                description: "From essentials to premium services—get everything at your fingertips.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Hire Influencers & Collaborate",
                description: "Launch campaigns, partner with creators, and grow your brand effortlessly.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Create Store & Sell Anything",
                description: "Open your own store—products, services, or both. Zero hassle, zero commission.",
                icon: <FiPieChart size={26} />
            },
            {
                title: "Create Channels & Go Live",
                description: "Teach, stream, or host exclusive sessions with your audience.",
                icon: <FiPieChart size={26} />
            },
            {
                title: "Find Courses & Upskill",
                description: "Learn new skills from top creators and experts, anytime, anywhere.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.svg"
    },
    {
        title: "Smart Selling with INFLU Stores",
        description: "Take control of your business growth without heavy commissions. INFLU empowers you to sell products & services seamlessly, connecting you to a powerful network of influencers and customers.",
        bullets: [
            {
                title: "Freedom to Sell Anything",
                description: "Products, services, subscriptions — your store, your rules.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Multiple Delivery Options",
                description: "Local, intercity, interstate, and custom delivery solutions at your fingertips.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Influencer-Powered Sales",
                description: "Leverage our influencer network to promote your products & services effortlessly.",
                icon: <FiTrendingUp size={26} />
            },
            {
                title: "All-in-One Dashboard",
                description: "Manage orders, deliveries, promotions, and payments from one simple interface.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.svg"
    },
   
    {
        title: "Secure Deals. Transparent Process.",
        description: "Every collaboration on INFLU is safe, verified, and transparent — so brands and creators can focus on impact, not risks.",
        bullets: [
            {
                title: "Fixed Rate Card",
                description: "No hidden charges. Clear and upfront pricing for every campaign.",
                icon: <FiLock size={26} />
            },
            {
                title: "Verified Influencer Profiles",
                description: "Every influencer is authenticated by INFLU for trust and credibility.",
                icon: <FiUser size={26} />
            },
            {
                title: "Approve Before Posting",
                description: "Nothing goes live without your green signal. Full control in your hands.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/mockup-3.svg"
    },
]