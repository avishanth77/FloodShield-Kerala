import React from 'react';
import ShelterCapacity from './ShelterCapacity';
import VolunteerTable from './VolunteerTable';
function AlertsPanel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-md)' }}>
      
      {/* Water Level Alert Card */}
      <div className="panel" style={{ padding: 'var(--sp-md)' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-sm)', margin: '0 0 var(--sp-md)' }}>
          <span className="material-symbols-outlined" style={{ color: 'var(--error)' }}>warning</span>
          Dam Alerts
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-sm)' }}>
          {/* Critical Alert Item */}
          <div style={{ backgroundColor: 'rgba(186, 26, 26, 0.1)', border: '1px solid var(--error-container)', borderRadius: '8px', padding: 'var(--sp-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
              <span style={{ fontWeight: '500' }}>Idukki Dam</span>
              <span style={{ color: 'var(--error)', fontWeight: '700' }}>98% Cap</span>
            </div>
            <div style={{ width: '100%', backgroundColor: 'var(--surface-variant)', borderRadius: '4px', height: '8px', overflow: 'hidden' }}>
              <div style={{ backgroundColor: 'var(--error)', height: '100%', width: '98%' }}></div>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--on-surface-variant)', marginTop: '8px', marginBottom: '0' }}>
              Red Alert Issued. Evacuation in progress downstream.
            </p>
          </div>

          {/* Warning Alert Item */}
          <div style={{ backgroundColor: 'var(--surface-container-low)', borderRadius: '8px', padding: 'var(--sp-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
              <span style={{ fontWeight: '500' }}>Mullaperiyar</span>
              <span style={{ color: 'var(--primary)', fontWeight: '700' }}>75% Cap</span>
            </div>
            <div style={{ width: '100%', backgroundColor: 'var(--surface-variant)', borderRadius: '4px', height: '8px', overflow: 'hidden' }}>
              <div style={{ backgroundColor: 'var(--primary)', height: '100%', width: '75%' }}></div>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--on-surface-variant)', marginTop: '8px', marginBottom: '0' }}>
              Monitoring closely. Outflow stabilized.
            </p>
          </div>
        </div>
      </div>
    
     <ShelterCapacity/>
      <VolunteerTable/>

    </div>
  );
}

export default AlertsPanel;