import React, { useState } from 'react';
import axios from 'axios';
import '../style/SOS.css'; // Import the CSS file

const SosForm = () => {
    const [formData, setFormData] = useState({
        emergencyType: '',
        location: '',
        urgency: 'Standard'
    });

    const handleUrgencyChange = (level) => {
        setFormData((prevData) => ({ ...prevData, urgency: level }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://127.0.0.1:8000/api/sos-requests/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
               body: JSON.stringify({
    emergency_type: formData.emergencyType,
    location: formData.location,
    urgency_level: formData.urgency
})
            });
            
            if (response.ok) {
                alert('SOS Request Sent Successfully. Help is on the way.');
                setFormData({ emergencyType: '', location: '', urgency: 'Standard' });
            } else {
                alert('Failed to send SOS Request. Please try again.');
            }
        } catch (error) {
            console.error('Network Error:', error);
            alert('A network error occurred while sending the SOS.');
        }
    };

    return (
        <div className="app-wrapper">
           

            <main className="main-content">
                <div className="page-header">
                    <h1 className="page-title">Send SOS Request</h1>
                    <p className="page-subtitle">
                        Fill in the details below to trigger an emergency alert. Please ensure all information is accurate to help rescue teams prioritize and locate you quickly.
                    </p>
                </div>

                <div className="form-card1">
                    <form onSubmit={handleSubmit}>
                        
                        <div className="input-group">
                            <label htmlFor="emergencyType">Emergency Type</label>
                            <div className="input-wrapper">
                                <span className="material-symbols-outlined input-icon">category</span>
                                <input 
                                    id="emergencyType"
                                    className="form-control" 
                                    placeholder="e.g., Medical, Fire, Security" 
                                    type="text" 
                                    value={formData.emergencyType}
                                    onChange={(e) => setFormData({...formData, emergencyType: e.target.value})}
                                    required
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <label htmlFor="location">Location Details</label>
                            <div className="input-wrapper">
                                <span className="material-symbols-outlined input-icon">location_on</span>
                                <textarea 
                                    id="location"
                                    className="form-control" 
                                    placeholder="Enter precise location or GPS coordinates" 
                                    rows="3"
                                    value={formData.location}
                                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                                    required
                                ></textarea>
                            </div>
                            {/* <button type="button" className="btn-text">
                                <span className="material-symbols-outlined icon-small">my_location</span>
                                Use My Current Location
                            </button> */}
                        </div>

                        <div className="input-group">
                            <label>Urgency Level</label>
                            <div className="urgency-grid">
                                {['Standard', 'Urgent', 'Life Threat'].map(level => (
                                    <button 
                                        key={level}
                                        type="button" 
                                        className={`urgency-btn ${formData.urgency === level ? 'active' : ''}`}
                                        onClick={() => handleUrgencyChange(level)}
                                    >
                                        {level}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button className="btn-submit" type="submit">
                            <span className="material-symbols-outlined">emergency_share</span>
                            SEND SOS REQUEST
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
};
export default SosForm;