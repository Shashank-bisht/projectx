import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';

const Ticket = () => {
    const location = useLocation();
    const { busDetails } = location.state; // Access the passed bus details
    const [showQRCode, setShowQRCode] = useState(false); // State to track QR code visibility

    // Apply the background color from busDetails
    useEffect(() => {
        document.body.style.backgroundColor = busDetails.color || 'white';
    }, [busDetails.color]);

    // Function to generate a random code
    function generateRandomCode(length = 18) {
        const characters = 'abcd023456789'; // Only lowercase letters and digits
        let randomCode = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomCode += characters[randomIndex];
        }
        return randomCode;
    }

    // Generate the random code
    const randomCode = generateRandomCode();

    // Function to toggle QR code visibility
    const toggleQRCode = () => {
        setShowQRCode(!showQRCode);
    };

    return (
        <div className="mt-24 pt-8 h-screen">
            <nav className='flex items-end'>
                <div className="text-white flex items-center ml-4">
                    <p className="mr-5 ml-2 text-2xl">x</p>
                    <p className='text-lg'>Ticket</p>
                </div>
                <div className='text-white underline mb-1 font-bold ml-52'>All tickets</div>
            </nav>
            {/* h1 */}
            <div className="mt-52 bg-white mx-4 rounded-md h-[48.5%]">
                {showQRCode ? (
                    <div className="p-7" onClick={toggleQRCode}>
                        <QRCodeCanvas
                            className=""
                            value={`https://example.com/${randomCode}`} // Unique QR value
                            size={350}
                            bgColor="white" // Light green background
                            fgColor="black" // QR code color
                            level="H"
                        />
                    </div>
                ) : (
                    <>
                        <h1 className='font-bold px-24 text-lg pt-2.5'>Transport Dept. of Delhi</h1>
                        {/* number and fare */}
                        <div className='flex items-end '>
                            <div>
                                <p className='text-lg ml-5 mr-2 mt-2 inline-block'> {busDetails.busNumber}</p>
                            </div>
                            <div>
                                <p className='text-lg ml-[190px] inline'>{'\u20B9'}{(busDetails.fare - (busDetails.fare / 10) + .25)}</p>
                            </div>
                        </div>
                        <hr className="border-t-1.5 mx-5 mt-2 border-black" />
                        {/* route and fare title */}
                        <div className='flex items-end space-x-16'>
                            <div className='ml-5 mt-3 mr-48 text-sm'>
                                <p>Bus Route</p>
                            </div>
                            <div className='ml-28 text-sm'>
                                <p>Fare</p>
                            </div>
                        </div>
                        {/* route number and price */}
                        <div className='flex items-end space-x-14'>
                            <div className='ml-5 mr-56 text-lg'>
                                <p>{busDetails.routeNumber}</p>
                            </div>
                            <div className='ml-28 text-lg'>
                                <p className='font-semibold'>{'\u20B9'}{busDetails.fare}.0</p>
                            </div>
                        </div>

                        {/* Booking time and tickets heading */}
                        <div className='flex items-end space-x-16'>
                            <div className='ml-5 mt-2 mr-40 text-sm'>
                                <p>Booking Time</p>
                            </div>
                            <div className='ml-10 text-sm'>
                                <p>Tickets</p>
                            </div>
                        </div>

                        {/* booking date and time and number of ticket */}
                        <div className='flex items-end space-x-15'>
                            <div className='ml-4 mr-10 text-lg'>
                                <p>{busDetails.date}<span className="mx-1">|</span>{busDetails.time}</p>
                            </div>
                            <div className='ml-11 text-lg'>
                                <p className='ml-20'>1</p>
                            </div>
                        </div>
                        <div className='mt-2 ml-4'>
                            {/* starting stop */}
                            <p className='text-sm'>Starting stop</p>
                            <p className='text-lg font-'>{busDetails.startingStop}</p>
                            {/* ending stop */}
                            <p className='text-sm mt-2'>Ending stop</p>
                            <p className='text-lg text-black'>{busDetails.endingStop}</p>
                        </div>
                        {/* random code */}
                        <div className='mt-1 ml-32'>
                            <p className='text-sm'>T{randomCode}</p>
                        </div>
                        {/* qr code */}
                        <div>
                            <div className='flex ml-3 mr-3 mb-3 mt-2 py-3 border-green-600 rounded-lg border-2 bg-green-100 items-center'>
                                <QRCodeCanvas className='ml-28 mr-2'
                                    value="https://example.com" // Replace with your URL or text
                                    size={25}
                                    bgColor="#aee6ae" // Light green background
                                    fgColor="#519c51" // QR code color
                                />
                                <div>
                                    <p className='bg-green-100 text-green-600 font-semibold border-green-900  text-center' onClick={toggleQRCode}>Show QR code</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className='mt-32 ml-36 pt-8'>
                <div className='flex items-center'> <img className='w-11 h-[17px] inline' src='/im.png' /><p className='inline m-1 font-bold text-gray-600 '>NETWORK</p></div>
            </div>
        </div>
    );
};

export default Ticket;