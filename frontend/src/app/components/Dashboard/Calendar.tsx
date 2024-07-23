import React, { useEffect, useState } from "react";

function GoogleCalendar() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    // Store user's calendar data

    function FetchData() {
        const [records, setRecords] = useState([])

        useEffect(() => {
            fetch('http://localhost:8000/')
            .then(response => response.json())
            .then(data => setRecords({data}))
            .catch(error => console.log(error))
        }, []);
        // Function to fetch data

        return (
            <div>
                {records}
            </div>
        );
    };
    return (FetchData());
      
}


export default GoogleCalendar;