import React from "react";
import "./Profile.css"


const groupMembers = [
  { id: 1, name: "Nama Anggota 1" },
  { id: 2, name: "Nama Anggota 2" },
  { id: 3, name: "Nama Anggota 3" },
  // Tambahkan anggota lainnya sesuai kebutuhan
];

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "Verdana",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    fontSize: "18px",
    marginBottom: "8px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  profileImage: {
    width: "50px", // Lebar gambar profil
    height: "50px", // Tinggi gambar profil
    borderRadius: "50%", // Agar terlihat seperti lingkaran
    marginRight: "10px",
  },
};

export default function Profile() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Anggota Kelompok 17</h1>
      <ul style={styles.list}>
        {groupMembers.map((member) => (
          <li key={member.id} style={styles.listItem}>
            <img
              src="https://source.unsplash.com/720x720?college-student"
              alt={`Foto ${member.name}`}
              style={styles.profileImage}
            />
            {member.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
