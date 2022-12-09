import React,{useEffect} from 'react'
import Link from 'next/Link'
import {BsBagCheckFill} from 'react-icons/bs'
import { useStateContext } from '../context/StateContext'
import { runFireworks } from '../lib/utils'
const Success = () => {
    const {setCartItems,setTotalPrice,setTotalQuantities} = useStateContext()
    useEffect(()=>{
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    },[])
  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill/>
            </p>
            <h2>Gracias por tu compra!</h2>
            <p className='email-msg'>
                Revisa tu correo electrónico para revisar tu factura.
            </p>
            <p className='description'>
                Si tienes preguntas, envíanos un email
                <a className='email' href="mailto:alejandrorocano1@gmail.com">
                    alejandrorocano1@gmail.com
                </a>
            </p>
            <Link href="/">
                <button type='button' widht='300px' className='btn'>
                    Continúa Comprando
                </button>
            </Link>
        </div>    
    </div>
  )
}

export default Success