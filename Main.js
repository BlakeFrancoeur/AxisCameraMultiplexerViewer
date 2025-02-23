import React, { useState } from "react";
import { VideoPlayer } from "@axis-media/media-stream-library-js";
import { Button, Input } from "@axis/fluent-components";

const App = () => {
  const [streams, setStreams] = useState([]);
  const [newStreamUrl, setNewStreamUrl] = useState("");

  const addStream = () => {
    if (newStreamUrl) {
      setStreams([...streams, newStreamUrl]);
      setNewStreamUrl("");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Axis Camera Multiplex</h1>
      <div className="mb-4 flex gap-2">
        <Input
          type="text"
          value={newStreamUrl}
          onChange={(e) => setNewStreamUrl(e.target.value)}
          placeholder="Enter RTSP URL"
        />
        <Button onClick={addStream}>Add Stream</Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {streams.map((url, index) => (
          <div key={index} className="border p-2">
            <VideoPlayer src={url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
