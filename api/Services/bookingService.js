import dbPromise from "../models/index.js";
const db = await dbPromise;
const { User, Agent, Booking } = db;

export const createBooking = async ({ userId, agentId, startAt, finishAt }) => {
  const user = await User.findByPk(userId);
  const agent = await Agent.findByPk(agentId);

  if (!user || !agent) {
    throw new Error("User or Agent not found");
  }

  return await Booking.create({
    userId,
    agentId,
    startAt,
    finishAt,
  });
};

export const deleteBookingById = async (id) => {
  const booking = await Booking.findByPk(id);
  if (!booking) {
    throw new Error("Booking not found");
  }
  await booking.destroy();
};
