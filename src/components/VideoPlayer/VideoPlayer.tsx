import { VideoData } from "@/types/YoutubeType";

const VideoPlayer = ({ video }: { video: VideoData }) => {
  return (
    <div>
      <iframe
        width="360"
        height="220"
        src={`https://www.youtube.com/embed/${video.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
