import './App.css';
import Video from "./pages/Video"

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video
          likes={111}
          messages={222}
          shares={333}
          name="Eduardo"
          description="O poder das Joias do Infinito"
          music="Avengers Theme"
          url="https://cdn.discordapp.com/attachments/1090791451383832711/1090802987225595964/Snapinsta.app_video_329238296_643045674488277_8890415696715888239_n.mp4"
        />
        <Video
          likes={111}
          messages={222}
          shares={333}
          name="Eduardo"
          description="Beggol no"
          music="Original audio"
          url="https://cdn.discordapp.com/attachments/1090791451383832711/1091508929130934402/WhatsApp_Video_2023-03-31_at_20.46.12.mp4"
        />

      </div>
    </div>
  );
}

export default App;
