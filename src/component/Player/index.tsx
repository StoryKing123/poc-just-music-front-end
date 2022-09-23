import axios from "axios";
// import howler from 'howler'
import { Howl, Howler } from "howler";

const Player = () => {
  const handlePlay = async () => {
    const url = await axios.get("http://127.0.0.1:3002/url");
    console.log(url);
    const src = (url.data as string).startsWith("AAA")
      ? "data:application/octet-stream;base64," + url.data
      : url.data;
    console.log(src);
    // const src =
    // "https://ce-sycdn.kuwo.cn/429489a87fe15708f03a699fa046bc49/632d885c/resource/n2/50/14/445681518.mp3";
    const player = new Howl({
      src: src,
      html5: true,
      preload: true,
      format: ["mp3", "flac"],
    });
    player.volume(100);
    player.play();
    // console.log(url);
  };
  return (
    <div>
      12
      <button onClick={handlePlay}>play</button>
    </div>
  );
};

export default Player;
