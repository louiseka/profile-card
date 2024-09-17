import React from "react";
import profileImg from "../Assets/Louise-Profile.png"

export default function Header() {
    return (
        <header>
            <img src={profileImg} alt="Profile image of Louise Aldridge smiling to camera" />
            <h1> Louise Aldridge </h1>
            <p> Frontend Developer </p>
        </header>
    )
}