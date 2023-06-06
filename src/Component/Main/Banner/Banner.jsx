import { useEffect, useState } from 'react';
import { slideritems } from '../../../data';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const Banner = () => {
    const[currentIndex,setCurrentIndex]=useState(0)
    const prevSlide=()=>{
        const isFirstSlide=currentIndex ===0;
        const newIndex= isFirstSlide ? slideritems.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide=()=>{
        const isLastSlide=currentIndex === slideritems.length - 1;
        const newIndex= isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)

    }

    useEffect(()=> {
        const changeSlide = setInterval(() => setCurrentIndex(currentIndex => 1-currentIndex) , 2000) // change your switch time here.
        return () => clearInterval(changeSlide);
     }, [])

 
  return(
    <>
    <div className='max-w-[1300px] h-[700px] w-full m-auto py-10 px-4 relative group'>
        <div style={{backgroundImage:`url(${slideritems[currentIndex].src})`}} className='w-full h-full bg-fit bg-center bg-cover duration-500'>

        </div>
        <div className=' hidden group-hover:block absolute top-[50%] -translate-y-[-50%] left-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer'>
        <svg onClick={prevSlide} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
  <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
</svg>


        </div>
        <div className=' hidden group-hover:block absolute top-[50%] -translate-y-[-50%] right-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer'>
        <svg onClick={nextSlide} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
</svg>



        </div>
        <div className='flex top-4 justify-center py-2'>
         
         {
            slideritems?.map((slide,slideIndex)=>(
                <div key={slideIndex} onClick={()=>setCurrentIndex(slideIndex)} className='text-2xl cursor-pointer'>
                    <FiberManualRecordIcon style={{ color: currentIndex===slideIndex ?"blue":""}} />
                </div>
            ))
         }
        </div>

    </div>
        
    </>
  )
};

export default Banner;
