import { Fragment } from "react";
import CardBig from "../component/CardBig"; import CardSmall from "../component/CardSmall"; import "./Movie.css";

export default function Movie() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const poster = [
        {
            title: "John Wick", id: 1,
            rate: 4,
            genre: "action, crime",
            img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
        },
        {
            title: "John Wick", id: 2,
            rate: 4,
            genre: "action, crime",
            img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
        },
        {
            title: "John Wick", id: 3,
            rate: 4,
            genre: "action, crime",
            img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
        },
        
    ];
    const data = [
        {
            title: "Oppenheimer", id: 1,
            rate: 4,
            genre: "biography, drama, history", img:
                "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
        {
            title: "Oppenheimer", id: 2,
            rate: 4,
            genre: "biography, drama, history", img:
                "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
        {
            title: "Oppenheimer", id: 3,
            rate: 4,
            genre: "biography, drama, history", img:
                "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
        {
            title: "Oppenheimer", id: 4,
            rate: 4,
            genre: "biography, drama, history", img:
                "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
        {
e: "Oppenheimer", id: 5,
            rate: 4,
            genre: "biography, drama, history", img:
                "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
        {
            title: "Oppenheimer", id: 6,
            rate: 4,
            genre: "biography, drama, history", img:
                "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
    ];

    return (
        <>
            <p id="movies">Top Movies</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR}
                        />
                        {data.length === index + 1 ? (
                            <div style={{ marginRight: 40 }} />
                        ) : null}
                    </Fragment>
                ))}
            </div>
            <div className="rowcoba">
                <div className="column">
                <p id="movies">All Movies</p>
                {data.map((item, index) => (
                    <Fragment key={item.id}>
                        
                        <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR}
                            onClick={() => alert("item id = " + item.id)}
                        />
                        {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                    </Fragment>
                ))}
                </div>
                <div className="column">
                <p id="movies">All Movies</p>
                {data.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR}
                            onClick={() => alert("item id = " + item.id)}
                        />
                        {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                    </Fragment>
                ))}
                </div>
            </div>
        </>
    );
}
