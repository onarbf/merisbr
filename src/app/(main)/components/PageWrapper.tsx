'use client'
import React from "react"
import {motion} from 'framer-motion'

export interface Props {
    children: React.ReactNode
}
export default function PageWrapper({children}: Props){
    
    return (<motion.div
    initial={{opacity: 0,y: 20}}
    animate={{opacity: 1,y: 0}}
    exit={{opacity: 1,y: 0}}>
        {children}
    </motion.div>)
}