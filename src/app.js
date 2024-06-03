function App() {
    const [events, setEvents] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    async function fetchEvents() {
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:3000/events');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setEvents(data);
        } catch (error) {
            setError(error.toString());
        } finally {
            setIsLoading(false);
        }
    }

    React.useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <div>
            <NavBar />
            <div className="container mt-5">
                {isLoading ? <div>Loading...</div> : error ? <div>Error: {error}</div> : null}
                <div className="row">
                    {events.map(event => <EventCard key={event.id} event={event} />)}
                </div>
            </div>
            <Footer />
        </div>
    );
}
