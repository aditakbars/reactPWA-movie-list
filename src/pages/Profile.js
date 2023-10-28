import { Fragment } from "react";
import React from "react";
import ProfileCard from "../component/ProfileCard";
import "./Profile.css";

export default function Profile() {
  const members = [
    {
        id: 1,
        imageUrl: "https://source.unsplash.com/720x720?band",
        nama: "Aditya Akbar Subakti",
        nim: "21120121130041",
    },
    {
        id: 2,
        imageUrl: "https://source.unsplash.com/720x720?singer",
        nama: "Fadlil Ferdiansyah",
        nim: "21120121130073",
    },
    {
        id: 3,
        imageUrl: "https://source.unsplash.com/720x720?drummer",
        nama: "Muhammad Fathan Mubiina",
        nim: "211201211140164",
    },
    {
        id: 4,
        imageUrl: "https://source.unsplash.com/720x720?bassist",
        nama: "Muhammad Fadlan Daris",
        nim: "21120121140146",
    },
  ];


  return (
    <>
        <p id="movies">Anggota Kelompok 17</p>
        {members.map((member, index) => (
            <Fragment key={member.id}>
            <ProfileCard
                nama={member.nama}
                nim={member.nim}
                imageUrl={member.imageUrl}
                onClick={() => alert("ini olang namanya " + member.nama)}
            />
            {members.length === index + 1 && <div style={{ marginBottom: 80 }} />}
            </Fragment>
        ))}
    </>
  );
}
