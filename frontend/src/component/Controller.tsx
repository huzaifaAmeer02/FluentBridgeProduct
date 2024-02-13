import React, { useState } from 'react';

function Controller() {
    const [isLoading ,setIsLoading] = useState(false);
    const [messages,setMessages] = useState<any[]>([]);

    return (
        <div>Controller</div>
    )
}

export default Controller
