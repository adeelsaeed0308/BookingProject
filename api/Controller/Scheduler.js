import * as bookingService from "../Services/schedulerService.js";

export const getScheduler = async (req, res) => {
  try {
    const { weekdate } = req.query;
    if (!weekdate) {
      return res.status(400).json({ message: "Weekdate parameter is missing" });
    }
    const bookings = await bookingService.getBookingsForWeek(weekdate);
    res.status(200).json({ status: "success", data: bookings });
  } catch (error) {
    console.error("Error fetching scheduler data: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
