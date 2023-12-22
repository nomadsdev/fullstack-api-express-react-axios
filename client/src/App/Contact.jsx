import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'

function Contact() {

    const [name, setName] = useState("");
    const [position, setPosition] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/', { crossdomain: true });
                console.log("Response data:", response.data);
    
                // ตรวจสอบว่า response.data เป็น array ที่มีข้อมูลหรือไม่
                if (Array.isArray(response.data) && response.data.length > 0) {
                    const firstContact = response.data[0]; // เลือกข้อมูลที่เป็น object แรก
                    setName(firstContact.name);
                    setPosition(firstContact.position);
                } else {
                    console.error("Data from API is not in the expected format.");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData();
    }, []);

  return (
    <div className='p-10'>

        <h1 className='text-center text-indigo-600 text-3xl'>
            Api Express React
        </h1>
        <br />
        <h1 className='text-center text-indigo-600'>Name: {name}</h1>
        <br />
        <p className='text-center text-indigo-600'>Position: {position}</p>
        
    </div>
  )
}

export default Contact