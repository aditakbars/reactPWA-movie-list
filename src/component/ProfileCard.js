import "./ProfileCard.css";

export default function ProfileCard(props) {
    return (
        <div className="ProfCard" onClick={props.onClick}>
            <img src={props.imageUrl} alt="" className="photo" />
            <div className="description">
                <div>
                <p id="nama">{props.nama}</p>
                <p id="genre">genre favorit nya {props.genre}</p>
                </div>
            </div>
        </div>
    );
}