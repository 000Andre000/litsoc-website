import React from "react";
import './report-style.css';

const ReportCard = (file) => {
    console.log(file);
    console.log(file.report.url);

    
    return (
        <div className="file-man-box">
             <a href={file.report.url} className="" rel="noreferrer" style={{textDecoration:'none',}}  target="_blank">
            <div className="file-img-box">
                <img
                    src="https://coderthemes.com/highdmin/layouts/assets/images/file_icons/pdf.svg"
                    alt="icon" />
            </div>
           
            <div className="file-man-title" style={{ textAlign: 'center' }}>
                <h3 style={{fontWeight:'bolder',color:'black'}} className="mb-0 text-overflow">{file.reportTitle}</h3>
                {/* <p className="mb-0"><small>{file.size / 1000} KB</small></p> */}
                <div style={{ padding: '0 30px' }}>
               
                   
                    <i style={{paddingTop:'8px', float: 'left', marginLeft:'-55px' , position:'relative',bottom:'210px' }} className="fa fa-eye filesee"></i>
                    
                
                
            </div>
            
            </div>
            </a> 
            
        </div>
    );
};



export default ReportCard;
