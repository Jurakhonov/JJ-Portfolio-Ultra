import React, { useState } from "react";
import "./work.css";

// Import videos
import Weather from "../../../assets/Новая папка/Weather.png";
import Kanban from "../../../assets/Новая папка/Kanban.png";
import FreeLine from "../../../assets/Новая папка/FreeLine.png";
import Diploma from "../../../assets/Новая папка/Diploma.png";
import ToDo from "../../../assets/Новая папка/ToDo.png";
import Portfolio from "../../../assets/Новая папка/Portfolio.png";
import SimpleChat from "../../../assets/Новая папка/SimpleChat.png";
import Grayson from "../../../assets/Новая папка/Grayson.png";

const videos = [
  {
    src: Weather,
    id: 1,
    title: "Weather",
    description:
      "“For those who always forget their umbrella but never their style.”",
    github: "https://github.com/Jurakhonov/Weather",
    preview: "https://weather-jj-01.netlify.app/",
  },
  {
    src: Kanban,
    id: 2,
    title: "Kanban",
    description:
      "“Because organizing tasks is easier than actually doing them.”",
    github: "https://github.com/Jurakhonov/Kanban",
    preview: "https://kanbanbyjj.netlify.app/",
  },
  {
    src: FreeLine,
    id: 3,
    title: "FreeLine",
    description:
      "“For those who live on the edge… or just love drawing outside the lines.”",
    github: "https://github.com/Jurakhonov/FreeLine_0.2",
    preview: "https://freeline02.netlify.app/",
  },
  {
    src: Diploma,
    id: 4,
    title: "Diploma",
    description:
      "“The only paper that proves you’ve truly mastered the art of surviving group projects.”",
    github: "https://github.com/Jurakhonov/Diploma",
    preview: "https://resilient-treacle-573a1b.netlify.app/",
  },
  {
    src: ToDo,
    id: 5,
    title: "ToDo",
    description: "“It’s not procrastination if it’s on a list... right?”",
    github: "https://github.com/Jurakhonov/todo",
    preview: "https://papaya-kashata-591c68.netlify.app/",
  },
  {
    src: SimpleChat,
    id: 6,
    title: "SimpleChat",
    description:
      "“Where even the quiet ones become chatty – welcome to SimpleChat!”",
    github: "https://github.com/Jurakhonov/SimpleChatApp",
    preview: "https://simple-chatik.netlify.app/",
  },
  {
    src: Grayson,
    id: 7,
    title: "Grayson",
    description:
      "“Meet Grayson: the friend who’s cooler than you, and never lets you forget it.”",
    github: "https://github.com/Jurakhonov/Grayson",
    preview: "https://jurakhonov.github.io/Grayson/",
  },
];

const Work = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  React.useEffect(() => {
    if (selectedVideo) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [selectedVideo]);

  const handleClick = (video) => {
    setSelectedVideo(video); // Set the selected video
  };

  const closeModal = () => {
    setSelectedVideo(null); // Close modal by setting selectedVideo to null
  };

  return (
    <div className="works">
      <div className="video-cards">
        {videos.map((video) => (
          <div
            key={video.id}
            className="video-card"
            onClick={() => handleClick(video)}
          >
            <img src={video.src} alt="" className="video" />
            <p className="title">{video.title}</p>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedVideo.src} alt="" className="modal__video" />
            <h2 className="title">{selectedVideo.title}</h2>
            <p className="desc">{selectedVideo.description}</p>
            <div className="flex">
              <div className="btnn">
                <a href={selectedVideo.github}  target="_blank"  className="github">
                  GitHub
                </a>
              </div>
              <div className="btnn">
                <a href={selectedVideo.preview}  target="_blank"  className="github">
                  Preview
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
