import React from 'react'
import './Checkin.css';

const Checkin = () => {
  return (
    <>
        <div className="checkin">
            <h2>Check-in</h2>
            <p>Enter today's weight: </p>  
            <input type="number" placeholder='Weight in lbs'/>  
            <button>Submit</button>
            <p>Last recorded weight: 170lbs on 8/23/2025</p>
            <p>Weight change since last check-in: -2lbs</p>
            <p>Total weight change: -15lbs</p>
            <div className="otherChanges">
                <div className="column-names">
                    <p>Other Measurements</p>
                    <p>Last Entry</p>
                    <p>Today's Entry</p>
                </div>
            </div>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Other Measurements</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Last Entry</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Today's Entry</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Waist</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>34 inches</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}><input type="number" placeholder='inches'/></td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Hips</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>40 inches</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}><input type="number" placeholder='inches'/></td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Chest</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>38 inches</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}><input type="number" placeholder='inches'/></td>
                    </tr>
                </tbody>
            </table>    
        </div>
    </>
  )
}

export default Checkin