import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import ResumeFile from "../images/Resume_Example.pdf"

export default function Resume() {

    const [numPages, setNumPages] = React.useState(null);
    const [pageNum, setPageNum] = React.useState(1);

    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

    function onDocumentLoadSuccess(numPages) {
        setNumPages(numPages);
    }

    return (
        <div className="card-container card-resume">
            
                <Document 
                    file={ResumeFile} 
                    onLoadSuccess={onDocumentLoadSuccess}
                    className="resume-document"
                    renderMode="svg"
                >
                    <Page 
                        pageNumber={pageNum} 
                        renderMode="svg" 
                        className="resume-page-container"
                        height={950}
                    />
                </Document>    
        </div>
    )
}