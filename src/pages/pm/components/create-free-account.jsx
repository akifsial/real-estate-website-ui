import React from 'react'
import house1 from "../../../assets/images/house_1.png"
import Button from "../../../components/button"
import arrowright from "../../../assets/svgs/arrow-right.svg";
import { motion } from "framer-motion"

function CreateAccount() {
    return (
        <div style={{
            backgroundImage: `url(${house1})`,
        }} className='bg-cover flex flex-col items-center justify-center text-white bg-center relative overflow-hidden w-full h-[384px]'>
            <div className="absolute inset-0 bg-[#00000033]"></div>
            <div className='relative max-w-[1100px] px-4'>
                <div className="overflow-hidden">

                    <motion.div
                        className="relative "
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >

                        <h2 className='playfair font-bold mb-[15px] md:mb-[16px] text-center md:text-[36px] text-[25px] '>Create your free account and start receiving verified homeowner leads no subscription, no risk</h2>

                    </motion.div>
                </div>

                <div className="overflow-hidden">

                    <motion.div
                        className="relative "
                        // {...motionSettings}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >

                        <p className='text-[14px] md:text-[18px] max-w-[815px] mx-auto text-center font-light mb-[10px] md:mb-[32px] '>There’s no monthly fee. You only pay a referral fee if you close a deal. Simple, fair, and built to help you scale — on your terms.</p>
                        <div className='flex items-center justify-center'>
                            <Button
                                icon={arrowright}
                                iconPosition="right"
                                text="Signup"
                                className='text-white bg-[#EF999A] text-[14px] md:text-[18px] font-semibold md:px-[67px] px-[26px] py-[14px] md:py-[22px] cursor-pointer '
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div >
    )
}

export default CreateAccount;