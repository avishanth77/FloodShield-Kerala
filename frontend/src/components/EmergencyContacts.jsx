import "../style/EmergencyContacts.css";

function EmergencyContacts() {
  return (
    <div className="emergency-box">

      <h3>🚨 Emergency Contacts</h3>

      <div className="contact-item">
        <span>State Disaster Control Room</span>
        <strong>1070</strong>
      </div>

      <div className="contact-item">
        <span>Police Control Room</span>
        <strong>100</strong>
      </div>

      <div className="contact-item">
        <span>Medical</span>
        <strong>108</strong>
      </div>

    </div>
  );
}

export default EmergencyContacts;
