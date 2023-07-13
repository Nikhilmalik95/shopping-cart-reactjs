import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CartItem from '../components/CartItem'


function Cart(){

    const {cart} = useSelector((state) => state)
    console.log("inside product")
    console.log(cart)
    const [totalAmount , setToalAmount] = useState(0);

    useEffect(()=>{
        setToalAmount( cart.reduce((acc , curr) => acc + curr.price , 0))
    }, [cart])

    

    return(
        <div className="flex justify-center m-4	">
            {
                cart.length > 0 ?
                (<div className="flex justify-center gap-x-10 flex-wrap">
                    <div className="sm:w-[350px] md:[450px] lg:w-[500px]">
                    {
                        cart.map((item , index) =>{
                            return <CartItem key={item.id} item={item} itemIndex={index} />
                        })
                    }
                    </div>
                    <div  className="flex flex-col justify-between mt-20">
                    <div>
                        <div className="text-green-600 font-bold tracking-wide">Your Cart</div>
                        <div className="text-green-600 font-extrabold text-3xl tracking-wide mb-1">Summery</div>
                        <p>
                            <span className="">Total Items : {cart.length}</span>
                        </p>
                        

                        
                    </div>

                    <div>
                    <p>Total Amount: <span className="font-bold ">${totalAmount}</span> </p>
                    <button className="w-full border mt-2 bg-green-600 font-bold text-white text-bold rounded-lg p-2 hover:bg-white hover:text-black hover:border-black  transition-all ease-in duration-300">
                            Checkout Now
                        </button>
                    </div>
                    </div>
                    
                </div>
                
                
                ) :
                (<div className="w-screen h-[630px] flex flex-col justify-center items-center"> <h1 className="font-bold text-green-600"> cart Empty</h1>
                <Link to="/">
                <button className="w-full border mt-2 bg-green-600 font-bold text-white text-bold rounded-lg p-2 hover:bg-white hover:text-black hover:border-black  transition-all ease-in duration-300">
                Shop Now</button>
                </Link>
                </div>)
            }
        </div>
    )
}

export default Cart