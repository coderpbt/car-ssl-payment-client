import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAsc, setAsc] = useState(true);
    const [search, setSearch] = useState('')
    const searchRef = useRef()

    useEffect( () =>{
        fetch(`http://localhost:5000/sarveces?search=${search}&order=${isAsc ? 'ASC' : 'DESC'}`)
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [isAsc,search])

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    }
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <div>
                  <input ref={searchRef} type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />
                  <button onClick={handleSearch}>Search</button>
                </div>
                <br />
                <button className='font-bold' onClick={()=> setAsc(!isAsc)}>{isAsc ? 'ASC' : 'DESC'}</button>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;