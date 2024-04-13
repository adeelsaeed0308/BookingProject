import * as bookingService from "../Services/bookingService.js";
export const createBooking = async (req, res) => {
  try {
    const { userId, startAt, finishAt } = req.body;
    const agentId = req.agentId;
    const newBooking = await bookingService.createBooking({
      userId,
      agentId,
      startAt,
      finishAt,
    });
    res.status(201).json(newBooking);
  } catch (error) {
    console.error("Error creating booking: ", error.message);
    res
      .status(error.message === "User or Agent not found" ? 404 : 500)
      .json({ message: error.message });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    await bookingService.deleteBookingById(id);
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    res
      .status(error.message === "Booking not found" ? 404 : 500)
      .json({ message: error.message });
  }
};
