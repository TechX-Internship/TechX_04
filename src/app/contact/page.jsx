import React from 'react'
import Hero from '../components/Hero'
import styles from './Contact.module.css'
import Button from '../components/Button'

const page = () => {
    return (
        <>
            <Hero title='Contact Us' />

            <section className={styles.contact}>
                <div className={`${styles.wrapper} container p-20`}>
                    <h2>Get In Touch</h2>
                    <p className='w-2/3 mx-auto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                    <div className="flex mt-[50px] gap-10">
                        <div className="w-1/2">
                            <form action="">
                                <div className='mb-[25px]'>
                                    <input type="text" name="" id="" placeholder='Name' className='border border-[#E8E8E8] w-full py-3 px-3 rounded-[5px]' />
                                </div>
                                <div className='mb-[25px]'>
                                    <input type="text" name="" id="" placeholder='Name' className='border border-[#E8E8E8] w-full py-3 px-3 rounded-[5px]' />
                                </div>
                                <div className='mb-[25px]'>
                                    <input type="email" name="" id="" placeholder='Email' className='border border-[#E8E8E8] w-full py-3 px-3 rounded-[5px]' />
                                </div>
                                <div className='mb-[25px]'>
                                    <input type="text" name="" id="" placeholder='Phone Number' className='border border-[#E8E8E8] w-full py-3 px-3 rounded-[5px]' />
                                </div>
                                <div className='mb-[25px]'>
                                    <input type="text" name="" id="" placeholder='Date' className='border border-[#E8E8E8] w-full py-3 px-3 rounded-[5px]' />
                                </div>
                                <div className='mb-[50px]'>
                                    <input type="text" name="" id="" placeholder='Time' className='border border-[#E8E8E8] w-full py-3 px-3 rounded-[5px]' />
                                </div>
                                <Button name='Submit' />
                            </form>
                        </div>
                        <div className="w-1/2">
                            <div className='flex items-start gap-5 mb-10'>
                                <div className='w-[40px] h-[40px] rounded-full border flex items-center justify-center border-[#808080]' >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                        <path d="M11.5 0.71875C6.94312 0.71875 3.23438 4.4275 3.23438 8.98438C3.23438 16.1216 10.3716 21.7566 10.6734 21.9938C10.9178 22.1878 11.2053 22.2813 11.5 22.2813C11.7947 22.2813 12.0822 22.1878 12.3266 21.9938C12.6284 21.7566 19.7656 16.1216 19.7656 8.98438C19.7656 4.4275 16.0569 0.71875 11.5 0.71875ZM11.5 12.19C9.63125 12.19 8.11469 10.6734 8.11469 8.80469C8.11469 6.93594 9.63125 5.41938 11.5 5.41938C13.3687 5.41938 14.8853 6.93594 14.8853 8.80469C14.8853 10.6734 13.3687 12.19 11.5 12.19Z" fill="#7F7F7F" />
                                    </svg>
                                </div>
                                <div className={`flex-1 ${styles.des}`}>
                                    <h4>Address</h4>
                                    <p>10-11,Gr. Floor, Ambedakar Shopping Center, Mandarwaja, Ring Road, Surat, Gujarat-395002</p>
                                </div>
                            </div>
                            <div className='flex items-start gap-5 mb-10'>
                                <div className='w-[40px] h-[40px] rounded-full border flex items-center justify-center border-[#808080]' >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M22.0448 17.52C21.3892 16.9703 17.5448 14.5358 16.9058 14.6475C16.6058 14.7008 16.3763 14.9565 15.762 15.6893C15.4779 16.0499 15.166 16.3877 14.829 16.6995C14.2116 16.5504 13.614 16.3288 13.0485 16.0395C10.831 14.9599 9.03947 13.1679 7.9605 10.95C7.67118 10.3846 7.44964 9.78691 7.3005 9.1695C7.6123 8.83252 7.95009 8.52056 8.31075 8.2365C9.04275 7.62225 9.29925 7.39425 9.3525 7.09275C9.46425 6.45225 7.0275 2.60925 6.48 1.95375C6.2505 1.68225 6.042 1.5 5.775 1.5C5.001 1.5 1.5 5.829 1.5 6.39C1.5 6.43575 1.575 10.9425 7.26675 16.7333C13.0575 22.425 17.5642 22.5 17.61 22.5C18.171 22.5 22.5 18.999 22.5 18.225C22.5 17.958 22.3177 17.7495 22.0448 17.52ZM17.25 11.25H18.75C18.7482 9.65925 18.1155 8.13416 16.9907 7.00933C15.8658 5.8845 14.3408 5.25179 12.75 5.25V6.75C13.9431 6.75119 15.087 7.22568 15.9307 8.06933C16.7743 8.91299 17.2488 10.0569 17.25 11.25Z" fill="#7F7F7F" />
                                        <path d="M21 11.25H22.5C22.497 8.66505 21.4688 6.18683 19.641 4.359C17.8132 2.53116 15.3349 1.50298 12.75 1.5V3C14.9372 3.00258 17.0342 3.8726 18.5808 5.41922C20.1274 6.96584 20.9974 9.06276 21 11.25Z" fill="white" />
                                    </svg>
                                </div>
                                <div className={`flex-1 ${styles.des}`}>
                                    <h4>Phone</h4>
                                    <p>+91-9825117510 (Naresh K. Sarasiya)</p>
                                </div>
                            </div>
                            <div className='flex items-start gap-5 mb-10'>
                                <div className='w-[40px] h-[40px] rounded-full border flex items-center justify-center border-[#808080]' >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.94558 4.61079L9.42933 11.0974C10.8435 12.5088 13.155 12.51 14.5703 11.0974L21.0541 4.61079C21.0694 4.59555 21.0812 4.57712 21.0886 4.55682C21.096 4.53651 21.0989 4.51482 21.097 4.49329C21.0951 4.47175 21.0885 4.4509 21.0776 4.43221C21.0667 4.41352 21.0519 4.39745 21.0341 4.38514C20.3728 3.92393 19.5682 3.65051 18.7015 3.65051H5.29824C4.43147 3.65051 3.62686 3.92398 2.96555 4.38514C2.94778 4.39745 2.93293 4.41352 2.92207 4.43221C2.91121 4.4509 2.90459 4.47175 2.90268 4.49329C2.90077 4.51482 2.90363 4.53651 2.91104 4.55682C2.91846 4.57712 2.93025 4.59555 2.94558 4.61079ZM1.21289 7.73581C1.21236 7.07674 1.37254 6.42747 1.67953 5.84426C1.69025 5.8237 1.70567 5.80596 1.72453 5.79248C1.7434 5.779 1.76517 5.77016 1.7881 5.76668C1.81102 5.7632 1.83444 5.76517 1.85646 5.77245C1.87847 5.77972 1.89846 5.79209 1.9148 5.80854L8.31647 12.2102C10.3437 14.2404 13.6548 14.2415 15.6833 12.2102L22.0849 5.80854C22.1013 5.79209 22.1212 5.77972 22.1433 5.77245C22.1653 5.76517 22.1887 5.7632 22.2116 5.76668C22.2345 5.77016 22.2563 5.779 22.2752 5.79248C22.2941 5.80596 22.3095 5.8237 22.3202 5.84426C22.6272 6.42748 22.7873 7.07674 22.7868 7.73581V16.2641C22.7868 18.5185 20.953 20.3494 18.7015 20.3494H5.29824C3.04674 20.3494 1.21289 18.5185 1.21289 16.2641V7.73581Z" fill="#7F7F7F" />
                                    </svg>
                                </div>
                                <div className={`flex-1 ${styles.des}`}>
                                    <h4>Email</h4>
                                    <p className='mb-1' >inquiry@Travel Mandi.in </p>
                                    <p className='mb-1' >nksabb@yahoo.co.in</p>
                                    <p>Travel_Mand@yahoo.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page