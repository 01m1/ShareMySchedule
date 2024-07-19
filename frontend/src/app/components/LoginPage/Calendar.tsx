import React, { useEffect, useState } from "react";
import { signInWithGoogle } from "@/app/utils/firebaseAuth";
import { record } from "zod";

function GoogleCalendar() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    // Store user's calendar data

    function FetchData() {
        const [records, setRecords] = useState([])

        useEffect(() => {
            fetch('http://localhost:8000/api/google-calendar/')
            .then(response => response.json())
            .then(data => setRecords({data}))
            .catch(error => console.log(error))
        }, [])
        // Function to fetch data

        return (
            <div>
                {records}
            </div>
        )
    }
}