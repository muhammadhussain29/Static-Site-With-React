import React from 'react';

const trainers = [
    { id: 1, name: "Alex Johnson", detail: "Strength Coach", image: "/profile.jpg" },
    { id: 2, name: "Sophia Martinez", detail: "Yoga Instructor", image: "/profile.jpg" },
    { id: 3, name: "James Williams", detail: "Personal Trainer", image: "/profile.jpg" }
];

const Trainers = () => {
    return (
        <section className='text-center py-12 md:px-16 px-8 bg-gray-100'>
            {/* Heading */}
            <h3 className='text-4xl capitalize font-bold text-red-600'>Meet Our Expert Trainers</h3>
            <p className='text-lg text-gray-600'>Train with the best to achieve your fitness goals</p>

            {/* Team Members */}
            <div className="flex flex-wrap justify-around mt-10">
                {trainers.map((member, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-lg flex flex-col items-center transition-transform duration-500 hover:scale-105"
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                    >
                        <div className="relative mb-4">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-40 h-40 rounded-full border-4 border-red-600 object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-red-600">{member.name}</h3>
                        <span className="text-sm font-bold text-gray-500 uppercase">{member.detail}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Trainers;
