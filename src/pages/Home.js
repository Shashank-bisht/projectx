import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [busNumber, setBusNumber] = useState('');
    const [routeNumber, setRouteNumber] = useState('');
    const [fare, setFare] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [startingStop, setStartingStop] = useState('');
    const [endingStop, setEndingStop] = useState('');
    const [color, setColor] = useState('');
    const navigate = useNavigate();

    // Define custom shades for colors
    const colorShades = {
        blue: '#0bc1c1', // Custom shade of blue
        green: '#66a64c', // Custom shade of green
        orange: '#f08b35', // Custom shade of orange
        darkblue: '#1646f2' // custom shade for 143 number
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Format Date
        const formattedDate = new Date(date);
        const day = formattedDate.getDate();
        const options = { month: 'short' };
        const month = formattedDate.toLocaleDateString('en-US', options);
        const year = formattedDate.getFullYear().toString().slice(-2);
        const formattedDateString = `${day} ${month}, ${year}`;

        // Format Time
        const [hour, minute] = time.split(':');
        const formattedHour = hour % 12 || 12;
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const formattedTimeString = `${formattedHour}:${minute} ${ampm}`;

        const busDetails = {
            busNumber,
            routeNumber,
            fare,
            time: formattedTimeString,
            date: formattedDateString,
            startingStop,
            endingStop,
            color: colorShades[color.toLowerCase()] || 'white', // Pass the selected color
        };

        navigate('/ticket', { state: { busDetails } });
    };

    return (
        <div>
            <h1 className='text-white ml-9 mt-10'>Bus Information Form</h1>
            <form className='my-7 ml-10 space-y-5' onSubmit={handleSubmit}>
                <div>
                    <label className='text-white'>
                        Color:
                        <input className='text-black'
                            type="text"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className='text-white'>
                        Bus Number:
                        <input className='text-black'
                            type="text"
                            value={busNumber}
                            onChange={(e) => setBusNumber(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className='text-white'>
                        Route Number:
                        <input className='text-black'
                            type="text"
                            value={routeNumber}
                            onChange={(e) => setRouteNumber(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className='text-white'>
                        Fare:
                        <input className='text-black'
                            type="number"
                            value={fare}
                            onChange={(e) => setFare(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className='text-white'>
                        Time:
                        <input className='text-black'
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className='text-white'>
                        Date:
                        <input className='text-black'
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className='text-white'>
                        Starting Stop:
                        <input className='text-black'
                            type="text"
                            value={startingStop}
                            onChange={(e) => setStartingStop(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className='text-white'>
                        Ending Stop:
                        <input className='text-black'
                            type="text"
                            value={endingStop}
                            onChange={(e) => setEndingStop(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button className='bg-black text-white p-6' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Home;