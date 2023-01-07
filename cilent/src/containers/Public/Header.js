import React, { useCallback } from 'react'
import logo from '../../assets/logowithoutbg.png'
import { Button } from '../../components'
import icons from '../../utils/icons';
import {useNavigate} from 'react-router-dom'
import {path} from '../../utils/constant'

const {AiOutlinePlusCircle} = icons

const Header = () => {
  const navigate = useNavigate()
  const goLogin = useCallback(()=>{
    navigate(path.LOGIN)
  })

  return (
    <div className='w-1100 flex items-center justify-between'>
        <img src={logo} alt='logo' className='w-[240px] h-[70px] object-contain' />
        <div className='flex items-center gap-1'>
            <small>Xin chào bạn !</small>
            <Button 
              text={'Đăng nhập'} 
              textColor='text-white' 
              bgColor='bg-[#3961fb]'
              onClick={goLogin}/>
            <Button 
              text={'Đăng ký'} 
              textColor='text-white' 
              bgColor='bg-[#3961fb]'
              onClick={goLogin}/>
            <Button 
              text={'Đăng tin mới'} 
              textColor='text-white' 
              bgColor='bg-secondary2' 
              IconProp={AiOutlinePlusCircle}
            />
        </div>
    </div>
  )
}

export default Header