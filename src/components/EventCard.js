function EventCard({ event }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card" style={{width: "18rem"}}>
                <img src={event.image} className="card-img-top" alt={event.title} />
                <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <p className="card-text">{event.description}</p>
                    <p className="card-text"><small className="text-muted">{new Date(event.date).toLocaleDateString()}</small></p>
                    <a href="#" className="btn btn-primary">Más información</a>
                </div>
            </div>
        </div>
    );
}
