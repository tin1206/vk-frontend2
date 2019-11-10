import React, {Component} from 'react';
    import QrScanner from '../qr_code_scanner/qr_scanner'

class AttendanceScanner extends Component{
        
    render(){
        return(
            <div>
                <QrScanner />
            </div>    
        )
    }
}

    export default  AttendanceScanner