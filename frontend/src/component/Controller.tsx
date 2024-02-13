import React, { useState } from 'react';

function Controller() {
    const [isLoading ,setIsLoading] = useState(false);
    const [messages,setMessages] = useState<any[]>([]);



    const createBlobUrl = (data:any)=>{};

    const handleStop = async () => {};

    return(
        <div className='h-screen overflow-y-hidden'>
            <div>Title</div>
            <div className='flex flex-col justify-between h-full overflow-y-scroll pb-96'>
                placeholder
            </div>
        </div>
    );





    return (
        <div>Controller</div>
    )
}

export default Controller
