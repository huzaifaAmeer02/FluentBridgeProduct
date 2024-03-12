import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import VideoPage from "./VideoPage.jsx";
import {IoIosArrowBack} from "react-icons/io";
import LoadingPage from "../LoadingPage/LoadingPage.jsx";

const ListeningActivity = () => {
    // Sample data for job details
    const jobs = [
        {
            title: "Labour",
            image:"https://img.freepik.com/free-vector/kids-overalls-helmets-building-house-happy-male-female-constructors-laying-bricks-using-construction-tools-flat-vector-illustration_74855-18390.jpg?t=st=1710088864~exp=1710092464~hmac=b06b72e32bae7899de2b18c94676a02cf6e4af4459f85d7d7de214c6a0757b78&w=900",
            //image: "https://img.freepik.com/free-photo/construction-workers-sunset_53876-138180.jpg?w=900&t=st=1707675337~exp=1707675937~hmac=88653ffa23aecd19c4753b729f43b7e73dc70638b03813eab70d37a3fa4433a4",
            link: "/Labour",
            videoUrl: "https://youtu.be/dImiR3Sr8Wo",
        },
        {
            title: "Engineer",
            image:"https://img.freepik.com/free-vector/organic-flat-design-engineers-working-construction_52683-59056.jpg?t=st=1710086945~exp=1710090545~hmac=2c1448018cde2ab95274bfcda6d6c1735c2445d6a39259638ead2278dec3468c&w=826",
            //image: "https://img.freepik.com/free-photo/protective-equipment-ensures-safety-work_60438-3943.jpg?t=st=1707676389~exp=1707679989~hmac=92ddeb27a72085020e8b5572aa232b5a1613a22ee5fc640edf8105058ce5f9cf&w=1380",
            link: "/Engineer",
            videoUrl: "https://youtu.be/dImiR3Sr8Wo",
        },
        {
            title: "Teacher",
            image:"https://img.freepik.com/free-vector/flat-design-black-teacher-clipart-illustration_23-2150973457.jpg?w=740&t=st=1710143163~exp=1710143763~hmac=0647e667d53d639477f5914cdfbb7bfa759ca6a7bb454ac3c4c5f27010b85984",
            //image: "https://img.freepik.com/free-photo/portrait-senior-male-professor-education-day_23-2150980102.jpg?t=st=1707676550~exp=1707680150~hmac=8d938dd34004f2bc26aadc8a07b8b272d9c545de48fe9ecb59d38652d32c4987&w=826",
            link: "/Teacher",
            videoUrl: "https://www.youtube.com/watch?v=toCn9-9hXoY",
        },
        {
            title: "Artists",
            image:"https://img.freepik.com/free-vector/modern-people-doing-cultural-activities_23-2148599167.jpg?t=st=1710087702~exp=1710091302~hmac=09804d71cdf5dff247fdb3ea507b73ac7a1b4c9600201e609e7dd1b32762045f&w=1060",
            //image: "https://img.freepik.com/free-photo/expert-carpenter-creates-art-using-old-wood-generated-by-ai_188544-27902.jpg?t=st=1707676810~exp=1707680410~hmac=214c00fb77b97dc5faa07eca7822df2c144270539bc98b3df003ffca4013797d&w=996",
            link: "/Artists",
            videoUrl: "https://www.youtube.com/watch?v=_Fwf45pIAtM",
        },
        {
            title: "Driver",
            image:"https://img.freepik.com/free-vector/taxi-app-concept_52683-35506.jpg?w=740&t=st=1710087915~exp=1710088515~hmac=169fa016303340df6eb205812a87469d6249e6adc28d3e8934604a7c9641c86e",
            //image: "https://img.freepik.com/premium-photo/indian-male-driver-delivery-van-uniform-looking-camera-with-smile_466689-96393.jpg?w=826",
            link: "/Driver",
            videoUrl: "https://www.youtube.com/watch?v=zpsVpnvFfZQ",
        },
        {
            title: "Nurse",
            image:"https://img.freepik.com/free-vector/hand-drawn-flat-design-chemotherapy-illustration_23-2149357519.jpg?t=st=1710089088~exp=1710092688~hmac=0d3e9ffc7f1fa58d3ab99cd133f5a34da56b94c8aaf5b147ba44b21a149cc292&w=740",
            //image: "https://img.freepik.com/free-photo/medium-shot-female-nurse-hospital_23-2150796710.jpg?t=st=1707677272~exp=1707680872~hmac=a712895918ac7a4e7d5853669d6df944b85ddef469c41796d1ad30ba6b00ab40&w=740",
            link: "/Nurse",
            videoUrl: "https://youtu.be/Y6_HBR2Ue2k"
        },
        {
            title: "Care Taker",
            image:"https://img.freepik.com/free-vector/volunteers-helping-elder-people_23-2148564552.jpg?t=st=1710088324~exp=1710091924~hmac=b83dd0844438890980b0c15cad8e780d9cbea84cffa29fe5a739eacb4d412efe&w=740",
            //image: "https://img.freepik.com/free-photo/senior-adults-embracing-smiling-sunlight-outdoors-generated-by-ai_188544-28058.jpg?t=st=1707677329~exp=1707680929~hmac=ba14133970261e201d41fce7dab6edcb28f2c6e9aa5bb7dd0dff6358d921659e&w=996",
            link: "/Taker",
            videoUrl: "https://youtu.be/dImiR3Sr8Wo",
        },
        {
            title: "IT Consultant",
            image:"https://img.freepik.com/free-vector/contact-us-flat-girl-background_23-2148182195.jpg?t=st=1710088505~exp=1710092105~hmac=15420e65bd4ba8ce1f57c774955f7b9446c2cee20da929626073c5a0fc3e42ee&w=740",
            //image: "https://img.freepik.com/premium-photo/young-programmer-computer-boss-chief-talking-office-colleagues-discussing-new-hardware-software-coding-programming-process_839035-190750.jpg?w=826",
            link: "/Consultant",
            videoUrl: "https://youtu.be/dImiR3Sr8Wo",
        },
        {
            title: "Pharmacist",
            image:"https://img.freepik.com/free-vector/online-pharmacy-flat-background-with-male-person-with-cold-home-interior-health-care-application-smartphone-vector-illustration_1284-75005.jpg?t=st=1710088714~exp=1710092314~hmac=74df0f089dfc39488ad103cd50bc74c3782b7e20443de50331822349d1970f2b&w=1060",
            //image: "https://img.freepik.com/free-photo/group-pharmacists-pharmacy-flat-design-cartoon-illustration_123827-28136.jpg?t=st=1707677491~exp=1707681091~hmac=246f3dfe3455d85752696558bd8902975e5cd3af2c501833e56ec99e7fab00f4&w=826",
            link: "/Pharmacist",
            videoUrl: "https://youtu.be/R5C-RJTqD5w",
        },
        {
            title: "Store Keeper",
            image:"https://img.freepik.com/free-vector/staff-working-logistic-storage-isolated-flat-vector-illustration-cartoon-stockroom-workers-loaders-taking-boxes-from-cargo-pallet-stockroom-delivery-service-warehouse-interior-concept_74855-10158.jpg?t=st=1710088854~exp=1710092454~hmac=55544c3f5f4b77c8c14a145c63eff05d6a21d4135092f1ad3b183fabecb78ec6&w=1060",
            //image: "https://img.freepik.com/premium-photo/smiling-woman-worker-hardware-warehouse-standing-checking-supplies-her-tablet-look-camera_73899-14238.jpg?w=1060",
            link: "/Keeper",
            videoUrl: "https://www.youtube.com/watch?v=qKVW_wJs91Q",
        }
        // Add more job details as needed
    ];
    const [selectedJob, setSelectedJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000); // Simulating a 2-second delay for demonstration purposes
    }, []);

    const handleJobClick = (job) => {
        setSelectedJob(job);
    };

    const handleClosePopup = () => {
        setSelectedJob(null);
    };

    return (
        <>
            {loading ? (
                <LoadingPage />
            ) : (
                <section className="bg-gray-100 py-8 relative">
                    <Link
                        to="/activities"
                        className="back-to-activities flex items-center text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white absolute left-4 top-4"
                    >
                        <IoIosArrowBack />
                    </Link>
                    <h2 className="text-3xl  font-bold text-center mb-8">
                        Listening Activity
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-4">
                        {jobs.map((job, index) => (
                            <div key={index}>
                                <div
                                    className="bg-white rounded-xl overflow-hidden shadow-lg transition duration-300 cursor-pointer"
                                    onClick={() => handleJobClick(job)}
                                >
                                    <img
                                        src={job.image}
                                        alt={job.title}
                                        className="w-full h-48 object-cover hover:opacity-75 shadow-xl transition duration-300"
                                    />
                                    <div className="p-4 text-center">
                                        <h3 className="text-lg font-bold mb-2">{job.title}</h3>
                                        <p className="text-blue-500 hover:underline">
                                            Watch Video
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {selectedJob && (
                        <VideoPage onClose={handleClosePopup} videoUrl={selectedJob.videoUrl} />
                    )}
                </section>
            )}
        </>
    );
};

export default ListeningActivity;
