function Journal(props) {
    return (
    <div className="Journal">
        <div className="flex-container">
          <div className="image"><img src={props.data.imageUrl} alt="brazil" /></div>
          <div className="description">
          <div className="location">
            <i class="fa-solid fa-location-dot"></i>
            <h3>{props.data.location}</h3>
            <a href={props.data.googleMapsUrl} target="_blank">View on Google Maps</a>
          </div>
          <h1 className="heading">{props.data.title}</h1>
          <p className="date">{props.data.startDate} - {props.data.endDate}</p>
          <p className="detail">{props.data.description}</p>
          </div>
        </div>
        <hr />
      </div>
    )
}

export default Journal