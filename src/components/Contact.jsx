import React from 'react'
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    TabsContents,
} from './animate-ui/radix/tabs';

const Contact = () => {
    return (
        <div className='flex max-sm:flex-col justify-center py-5 rounded-2xl bg-white gap-4 px-4'>
            <div className="md:w-3xl p-8 bg-green-300 rounded-2xl">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Let's Talk! 👋</h2>
                <p className="text-lg text-gray-800 mb-6">
                    Whether you're reaching out for business collaboration or career opportunities, we’re all ears.
                </p>
                <p className="text-md text-gray-700">
                    Choose a tab on the right and send us your details — we’ll get back to you soon.
                </p>
            </div>
            <div className='flex justify-center md:w-3xl'>
                <Tabs className="w-full border border-black" defaultValue="Business">

                    <TabsList className="grid  grid-cols-2 mx-auto border">
                        <TabsTrigger value="Business">Business</TabsTrigger>
                        <TabsTrigger value="Career">Career</TabsTrigger>
                    </TabsList>

                    <TabsContents className="mx-10 bg-blue-200  mb-3 rounded-[5px] h-full ">
                        <TabsContent value="Business" className="space-y-6 ">
                            <form className='px-10  p-5'>
                                <div className="mb-4  px-2">
                                    <label htmlFor="name" className='font-poppins block my-1'>Name</label>
                                    <input type="text" id='name' name='name' placeholder='Enter your name' className='my-1 w-full p-2 outline-2 rounded-[5px] outline-blue-300 placeholder:text-gray-500 placeholder:font-normal bg-white' />
                                </div>
                                <div className="mb-4  px-3">
                                    <label htmlFor="companyName" className='font-poppins block my-1'>Company name</label>
                                    <input type="text" id='companyName' name='companyName' placeholder='Enter your Company name' className='my-1 w-full p-2 outline-2 rounded-[5px] outline-blue-300 placeholder:text-gray-500 placeholder:font-normal bg-white' />
                                </div>
                                <div className="px-3">
                                    <label htmlFor="promotionalActivity" className='flex items-center gap-3 font-poppins text-sm'><input className="accent-violet-800 w-4 h-4" type="checkbox" id='promotionalActivity' /> Enquiry for promotional activities</label>
                                </div>
                                <div className="mb-4  px-2">
                                    <label htmlFor="Email" className='font-poppins block my-1'>Email</label>
                                    <input type="email" id='Email' name='Email' placeholder='Enter your name' className='my-1 w-full p-2 outline-2 rounded-[5px] outline-blue-300 placeholder:text-gray-500 placeholder:font-normal bg-white' />
                                </div>
                                <div className="mb-4  px-3">
                                    <label htmlFor="contact" className='font-poppins block my-1'>Contact</label>
                                    <input type="tel" id='contact' name='contact' placeholder='Enter your Company name' className='my-1 w-full p-2 outline-2 rounded-[5px] outline-blue-300 placeholder:text-gray-500 placeholder:font-normal bg-white' />
                                </div>
                                <div className="px-3">
                                    <button className='w-full bg-[#0B9CFF] p-2 text-lg font-poppins font-medium text-white rounded-[5px] cursor-pointer hover:bg-[#0b91ff]'>Submit</button>
                                </div>
                            </form>
                        </TabsContent>


                        <TabsContent value="Career" className="space-y-6 ">
                            <form className='px-10  p-5'>
                                <div className="mb-4 px-2 grid grid-cols-2  gap-2">
                                    <div>
                                        <label htmlFor="first name" className='font-poppins block my-1'>First name</label>
                                        <input type="text" id='first name' name='first name' className=' w-full p-2 outline-2 rounded-[5px] outline-blue-300 placeholder:text-gray-500 placeholder:font-normal bg-white' />
                                    </div>
                                    <div>
                                        <label htmlFor="last name" className='font-poppins block my-1'>Last name</label>
                                        <input type="text" id='last name' name='last name' className=' w-full p-2 outline-2 rounded-[5px] outline-blue-300 placeholder:text-gray-500 placeholder:font-normal bg-white' />
                                    </div>
                                    <div className='col-span-2'>
                                        <label htmlFor="first name" className='font-poppins block my-1'>Email</label>
                                        <input type="text" id='first name' name='first name' className='w-full p-2 outline-2 rounded-[5px] outline-blue-300 placeholder:text-gray-500 placeholder:font-normal bg-white' />
                                    </div>
                                    <div className='col-span-2'>
                                        <label htmlFor="last name" className='font-poppins block my-1'>Contact No</label>
                                        <input type="text" id='last name' name='last name' className=' w-full p-2 outline-2 rounded-[5px] outline-blue-300 placeholder:text-gray-500 placeholder:font-normal bg-white' />
                                    </div>

                                    <div className='col-span-2'>
                                        <label htmlFor="last name" className='font-poppins block my-1'>Why do you want to join Nakkalites ?</label>
                                        <textarea rows={2} id='last name' name='last name' className=' w-full p-2 outline-2 rounded-[5px] outline-blue-300 placeholder:text-gray-500 placeholder:font-normal bg-white' />

                                    </div>
                                    <div className="col-span-2">
                                        <button className='w-full bg-[#0B9CFF] p-2 text-lg font-poppins font-medium text-white rounded-[5px] cursor-pointer hover:bg-[#0b91ff]'>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </TabsContent>
                    </TabsContents>
                </Tabs>
            </div>
        </div>
    )
}

export default Contact
