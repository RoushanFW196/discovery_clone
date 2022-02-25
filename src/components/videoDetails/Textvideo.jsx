import { useSelector } from "react-redux";

export const Text = () => {
    const { video } = useSelector((state) => ({
        video: state.videoState.video
      }));
    return <div>
        {/* <iframe width="560" height="315" src={video.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/nmRbNHYCzmU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
}