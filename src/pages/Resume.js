import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import ResumeFile from "../images/Resume_Example.pdf"

export default function Resume() {

    /* React-pdf Code */
    const [numPages, setNumPages] = React.useState(null);
    const [pageNum, setPageNum] = React.useState(1);

    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

    function onDocumentLoadSuccess(numPages) {
        setNumPages(numPages);
    }

    /* Resume Logo */
    var resumeFill =
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-text-fill" viewBox="0 0 16 16">
            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
        </svg>

    return (
        <div className="card-container">

            {/* Header */}
            <div className="header">
                <h2 className="header-title">{resumeFill} Resume</h2>
            </div>
            <hr className="header-line" />
            
                {/* <Document 
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
                </Document>     */}
                <hr className="content-line-divider" />
        </div>
    )
}