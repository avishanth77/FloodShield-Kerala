import React from 'react';
import ShelterCapacity from './ShelterCapacity';
import VolunteerTable from './VolunteerTable';
import DamLevel from './DamLevel';
function AlertsPanel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-md)' }}>
      
    
    <DamLevel/>
     
     <ShelterCapacity/>
      <VolunteerTable/>

    </div>
  );
}

export default AlertsPanel;