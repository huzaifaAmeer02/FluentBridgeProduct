import React from "react";
import { Link } from "react-router-dom";

const ListeningActivity = () => {
    // Sample data for job details
    const jobs = [
        {
            title: "Labour",
            image: "https://img.freepik.com/free-photo/construction-workers-sunset_53876-138180.jpg?w=900&t=st=1707675337~exp=1707675937~hmac=88653ffa23aecd19c4753b729f43b7e73dc70638b03813eab70d37a3fa4433a4",
            link: "/Labour",
        },
        {
            title: "Engineer",
            image: "https://img.freepik.com/free-photo/protective-equipment-ensures-safety-work_60438-3943.jpg?t=st=1707676389~exp=1707679989~hmac=92ddeb27a72085020e8b5572aa232b5a1613a22ee5fc640edf8105058ce5f9cf&w=1380",
            link: "/Engineer",
        },
        {
            title: "Teacher",
            image: "https://img.freepik.com/free-photo/portrait-senior-male-professor-education-day_23-2150980102.jpg?t=st=1707676550~exp=1707680150~hmac=8d938dd34004f2bc26aadc8a07b8b272d9c545de48fe9ecb59d38652d32c4987&w=826",
            link: "/Teacher",
        },
        {
            title: "Artists",
            image: "https://img.freepik.com/free-photo/expert-carpenter-creates-art-using-old-wood-generated-by-ai_188544-27902.jpg?t=st=1707676810~exp=1707680410~hmac=214c00fb77b97dc5faa07eca7822df2c144270539bc98b3df003ffca4013797d&w=996",
            link: "/Artists",
        },
        {
            title: "Driver",
            image: "https://img.freepik.com/premium-photo/indian-male-driver-delivery-van-uniform-looking-camera-with-smile_466689-96393.jpg?w=826",
            link: "/Driver",
        },
        {
            title: "Nurse",
            image: "https://img.freepik.com/free-photo/medium-shot-female-nurse-hospital_23-2150796710.jpg?t=st=1707677272~exp=1707680872~hmac=a712895918ac7a4e7d5853669d6df944b85ddef469c41796d1ad30ba6b00ab40&w=740",
            link: "/Nurse",
        },
        {
            title: "Care Taker",
            image: "https://img.freepik.com/free-photo/senior-adults-embracing-smiling-sunlight-outdoors-generated-by-ai_188544-28058.jpg?t=st=1707677329~exp=1707680929~hmac=ba14133970261e201d41fce7dab6edcb28f2c6e9aa5bb7dd0dff6358d921659e&w=996",
            link: "/Taker",
        },
        {
            title: "IT Consultant",
            image: "https://img.freepik.com/premium-photo/young-programmer-computer-boss-chief-talking-office-colleagues-discussing-new-hardware-software-coding-programming-process_839035-190750.jpg?w=826",
            link: "/Consultant",
        },
        {
            title: "Pharmacist",
            image: "https://img.freepik.com/free-photo/group-pharmacists-pharmacy-flat-design-cartoon-illustration_123827-28136.jpg?t=st=1707677491~exp=1707681091~hmac=246f3dfe3455d85752696558bd8902975e5cd3af2c501833e56ec99e7fab00f4&w=826",
            link: "/Pharmacist",
        },
        {
            title: "Store Keeper",
            image: "https://img.freepik.com/premium-photo/smiling-woman-worker-hardware-warehouse-standing-checking-supplies-her-tablet-look-camera_73899-14238.jpg?w=1060",
            link: "/Keeper",
        }
        // Add more job details as needed
    ];

    return (
        <section className="bg-gray-200 py-8">
            <h2 className="text-3xl font-bold text-center mb-8">Listening Activity</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-4">
                {jobs.map((job, index) => (
                    <Link to={job.link} key={index}>
                        <div
                            className="bg-white rounded-xl overflow-hidden shadow-lg transition duration-300"
                        >
                            <img
                                src={job.image}
                                alt={job.title}
                                className="w-full h-48 object-cover hover:opacity-75 shadow-xl transition duration-300"
                            />
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-bold mb-2">{job.title}</h3>
                                <Link to={job.link} className="text-blue-500 hover:underline">Watch Video</Link>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ListeningActivity;
