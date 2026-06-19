import React from 'react';

function StatCard({ title, value, icon, colorClass, trendText, trendIcon }) {
  // Using inline styles to map the colorClass prop to our CSS variables
  const iconBgColor = `var(--${colorClass}-container, #e0e3e5)`;
  const iconTextColor = `var(--${colorClass}, #191c1e)`;

  return (
    <div className="stat-card2">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div 
          className="icon-wrapper" 
          style={{ backgroundColor: iconBgColor, color: iconTextColor }}
        >
          <span className="material-symbols-outlined icon-fill">{icon}</span>
        </div>
        
        {trendText && (
          <span style={{
            backgroundColor: 'rgba(186, 26, 26, 0.1)', 
            color: 'var(--error)', 
            padding: '4px 8px', 
            borderRadius: '16px',
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            {trendIcon && <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>{trendIcon}</span>}
            {trendText}
          </span>
        )}
      </div>
      
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default StatCard;