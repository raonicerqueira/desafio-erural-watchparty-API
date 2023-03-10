const router = require("express").Router();

const Room = require("./models/room");

router.post("/create", (req, res) => {
  const { roomName, roomCode, videoURL } = req.body;
  let newRoom = Room({
    roomName,
    roomCode,
    videoURL,
  });
  newRoom.save();
  res.send({ message: "success" });
});

router.post("/join", (req, res) => {
  const { roomCode } = req.body;
  Room.findOne({ roomCode }).then((room) => {
    if (!room) {
      res.send({
        message: "room code invalid",
      });
    } else {
      res.send({
        roomCode,
        videoURL: room.videoURL,
        roomName: room.roomName,
        message: "success",
      });
    }
  });
});

router.put("/updatevideo", (req, res) => {
  const { roomCode, videoURL } = req.body;
  Room.findOneAndUpdate(
    { roomCode: roomCode },
    { videoURL: videoURL },
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    }
  );

  res.send({
    message: "YouTube link updated",
  });
});

module.exports = router;
