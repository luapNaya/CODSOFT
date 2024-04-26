import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import Creatable from 'react-select/creatable';

const PostJob = () => {

    const [selectedOption, setSelectedOption] = useState(null);

    const {
        register,
        handleSubmit, reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        data.skills = selectedOption;
        // console.log(data);
        fetch("http://localhost:3000/post-job", {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                if (result.acknowledged === true) {
                    alert("Job Posted Successfully!")
                }
                reset()
            })
    };

    const options = [
        { value: "JavaScript", label: "Javascript" },
        { value: "C++", label: "C++" },
        { value: "HTML", label: "HTML" },
        { value: "CSS", label: "CSS" },
        { value: "Node", label: "Node" },
        { value: "React", label: "React" },
        { value: "Redux", label: "Redux" },
        { value: "MongoDB", label: "MongoDB" },
    ]

    return (
        <div className=' max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            {/* form */}
            <div className='bg-[#fafafa] py-10 px-4 lg:px-16'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

                    {/* first row */}
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Title</label>
                            <input type="text" defaultValue={"Web Developer"}
                                {...register("jobTitle")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Company Name</label>
                            <input type="text" placeholder='Eg. Microsoft'
                                {...register("companyName")} className='create-job-input' />
                        </div>
                    </div>

                    {/* second row */}
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Minimum Salary</label>
                            <input type="text" placeholder='$20k'
                                {...register("minPrice")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Maximum Salary</label>
                            <input type="text" placeholder='$120k'
                                {...register("maxPrice")} className='create-job-input' />
                        </div>
                    </div>

                    {/* third row */}
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Salary Type</label>
                            <select {...register("salaryType")} className='create-job-input'>
                                <option value="">Choose your salary</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Location</label>
                            <input type="text" placeholder='Eg. London'
                                {...register("jobLocation")} className='create-job-input' />
                        </div>
                    </div>

                    {/* fourth row */}
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Posting Date</label>
                            <input type="date" placeholder='Eg. 2024-04-17'
                                {...register("postingDate")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Experience Level</label>
                            <select {...register("experienceLevel")} className='create-job-input'>
                                <option value="">Choose your experience</option>
                                <option value="NoExperience">No Experience</option>
                                <option value="Internship">Internship</option>
                                <option value="Work Remotely">Work Remotely</option>
                            </select>
                        </div>
                    </div>

                    {/* fifth row */}
                    <div>
                        <label className='block mb-2 text-lg'>Requied Skills</label>
                        <Creatable
                            defaultValue={selectedOption} onChange={setSelectedOption} options={options} isMulti
                            className='create-job-input py-4' />
                    </div>

                    {/* sixth row */}
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Company Logo</label>
                            <input type="url" placeholder='Paste your image url'
                                {...register("companyLogo")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Employment Type</label>
                            <select {...register("employmentType")} className='create-job-input'>
                                <option value="">Select your job type</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Temporary">Temporary</option>
                            </select>
                        </div>
                    </div>

                    {/* seventh row */}
                    <div className='w-full'>
                        <label className='block mb-2 text-lg'>Job Description</label>
                        <textarea {...register("description")}
                            rows={6}
                            defaultValue={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officiis, atque ea molestiae, aut repudiandae consectetur recusandae quas, temporibus optio fugit enim incidunt voluptate quam."}
                            placeholder='Job Description'
                            className='w-full py-1.5 pl-3 focus:outline-none placeholder:text-gray-400' />
                    </div>

                    {/* last row */}
                    <div className='w-full'>
                        <label className='block mb-2 text-lg'>Job Posted By</label>
                        <input type="email" placeholder='your email'
                            {...register("postingBy")} className='create-job-input' />
                    </div>


                    <input type="submit" className='block bg-secondary text-white font-semibold px-8 py-2 rounded-sm cursor-pointer' />
                </form>
            </div>
        </div>
    )
}

export default PostJob

// loom - https://i.ibb.co/2csZLkF/Loom.png
// linear - https://i.ibb.co/0M7HGnJ/Linear.png
// notion - https://i.ibb.co/ypvd1Pv/Notion.png
// raycast - https://i.ibb.co/hH2Dn3Q/Raycast.png
// spline - https://i.ibb.co/7SbBy3M/Spline.png
// trainline - https://i.ibb.co/xfYqGpX/Trainline.png
