import React from 'react'
import { Input } from '../components'

const Inputs = () => {
    return (
        <>
            <h1 className='title'>Inputs</h1>
            <div className='row-container'>
                <div className='space-y-[16px] '>
                    <p className='label'>&lt;Input /&gt;</p>
                    <Input />
                </div>
                <div className='space-y-[16px] '>
                    <p className='label'>&:hover</p>
                    <Input styles='border-gray-1'  />
                </div>
                <div className='space-y-[16px] '>
                    <p className='label'>&:focus</p>
                    <Input styles='border-gray-1 border-primary' labelStyle="text-primary" />
                </div>
                
            </div>
            <div className='row-container'>
                <div className='space-y-[16px] '>
                    <p className='label'>&lt;Input /&gt;</p>
                    <Input  isError />
                </div>
                <div className='space-y-[16px] '>
                    <p className='label'>&:hover</p>
                    <Input styles='border-gray-1'  />
                </div>
                <div className='space-y-[16px] '>
                    <p className='label'>&:focus</p>
                    <Input isError />
                </div> 
            </div>
            <div className='row-container'>
                <div className='space-y-[16px] '>
                    <p className='label'>&lt;Input disabled /&gt;</p>
                    <Input  disabled />
                </div> 
            </div>
            
            <div className='row-container'>
                <div className='space-y-[16px] '>
                    <p className='label min-w-[400px]'>&lt;Input helperText='Some interest text' /&gt;</p>
                    <Input  helperText='Some interest text' />
                </div> 

                <div className='space-y-[16px] '>
                    <p className='label min-w-[400px]'>&lt;Input error helperText='Some interest text' /&gt;</p>
                    <Input isError helperText='Some interest text' />
                </div> 
            </div>
            
            <div className='row-container'>
                <div className='space-y-[16px] '>
                    <p className='label min-w-[400px]'>&lt;Input startIcon  /&gt;</p>
                    <Input leftIcon={
                        <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#828282" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#828282" className=" absolute left-icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg> 
                        </>
                    } />
                </div> 

                <div className='space-y-[16px] '>
                    <p className='label min-w-[400px]'>&lt;Input endIcon  /&gt;</p>
                    <Input 
                        rightIcon={<>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="right-icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </svg> 
                        </>}
                    />
                </div> 
            </div>
            
            <div className='row-container'> 
                <div className='space-y-[16px] '>
                    <p className='label min-w-[400px]'>&lt;Input value="Text" /&gt;</p>
                    <Input value="Text" />
                </div> 
            </div>
            
            <div className='row-container'>
                <div className='space-y-[16px] '>
                    <p className='label min-w-[400px]'>&lt;Input  size="sm" /&gt;</p>
                    <Input styles='h-[40px]' />
                </div> 

                <div className='space-y-[16px] '>
                    <p className='label min-w-[400px]'>&lt;Input size="md" /&gt;</p>
                    <Input />
                </div> 
            </div>
            
            <div className=''> 
                <div className='space-y-[16px] '>
                    <p className='label'>&lt;Input fullWidth /&gt;</p>
                    <Input  />
                </div> 
            </div>
            
            
            <div className='row-container'> 
                <div className='space-y-[16px] '>
                    <p className='label'>&lt;Input fullWidth /&gt;</p>
                    <Input row={4} multiple />
                </div> 
            </div>
        </>
    )
}

export default Inputs
