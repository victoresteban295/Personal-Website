import React from "react";
import { Document, Page } from "react-pdf";
import Resume from "../images/pdf02.pdf"

export default function Card() {

    const [numPages, setNumPages] = React.useState(null);
    const [pageNum, setPageNum] = React.useState(1);

    function onDocumentLoadSuccess(numPages) {
        setNumPages(numPages);
    }

    return (
        <div className="card-container">
            <Document file={Resume} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNum}/>
            </Document>
        </div>
    )
}