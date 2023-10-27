// Profile.js
import React from "react";

const groupMembers = [
  { id: 1, name: "Nama Anggota 1" },
  { id: 2, name: "Nama Anggota 2" },
  { id: 3, name: "Nama Anggota 3" },
  // Tambahkan nama anggota lainnya sesuai kebutuhan
];

export default function Profile() {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
      <h1 style={{ color: "white" }}>Profile</h1>
      <ul style={{ color: "white" }}>
        {groupMembers.map((member) => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
}
