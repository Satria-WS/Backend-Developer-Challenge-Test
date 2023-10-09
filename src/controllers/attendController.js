import Attendance from "../models/attendance";

const clockIn = async (req, res) => {
  try {
    const { userId, latitude, longitude, ip } = req.body;

    const attendance = new Attendance({
      userId,
      latitude,
      longitude,
      ip,
      clockInTime: new Date(),
    });

    await attendance.save();

    res.status(201).json({ message: "Clock In succes" });
  } catch {
    console.error("Error saat Clock In:", error);
    res
      .status(500)
      .json({ message: "failed Clock In" });
  }
};

const clockOut = async (req, res) => {
  try {
    const { userId, latitude, longitude, ip } = req.body;

    const latestAttendance = await Attendance.findOne(
      { userId },
      {},
      { sort: { clockInTime: -1 } }
    );

    if (!latestAttendance) {
      return res.status(400).json({ message: "failed Clock In" });
    }

    latestAttendance.latitudeOut = latitude;
    latestAttendance.longitudeOut = longitude;
    latestAttendance.ipOut = ip;
    latestAttendance.clockOutTime = new Date();

    await latestAttendance.save();

    res.status(200).json({ message: "Clock Out succes" });
  } catch (error) {
    console.error("Error  Clock Out:", error);
    res
      .status(500)
      .json({ message: "failed Clock Out" });
  }
};

export { clockIn, clockOut };
