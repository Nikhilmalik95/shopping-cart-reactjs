
import { toast } from 'react-hot-toast'
import {MdDelete} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/CartSlice'
import { useEffect } from 'react'


function CartItem({item}){
    const dispatch = useDispatch()

    function removeFromCart(){
        
        dispatch(remove(item.id))
        
        toast.success("Item removed")
    }

    return(
        <div className='flex  items-center justify-center  gap-1 p-2 mt-10 border-b-[2px] border-slate-700 w-full '>
            <div className='flex '>
                <div className="h-[200px] w-[200px] mr-2">
                    <img src={item.image} className='w-full h-full' />
                </div>
                <div>
                    <h1 className='font-bold'>{item.title}</h1>
                    <h1>{item.description.split(" ").slice(0, 15).join(" ") + "..."}</h1>
                    <div className='flex justify-between mt-5 '><p className='text-green-600 font-bold'>${item.price}</p>
                    <div onClick={removeFromCart} >
                        <MdDelete className=' text-red-800 bg-red-200 w-9 h-9 rounded-full p-2 cursor-pointer ' />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem