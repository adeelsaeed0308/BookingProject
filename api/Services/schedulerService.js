import dbPromise from "../models/index.js";
const db = await dbPromise;
const { User, Booking } = db;
import Sequelize from "sequelize";

export const getBookingsForWeek = async (weekdate) => {
  const startDate = new Date(weekdate);
  startDate.setHours(0, 0, 0, 0);
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 7);

  return await Booking.findAll({
    where: {
      startAt: {
        [Sequelize.Op.gte]: startDate,
      },
      finishAt: {
        [Sequelize.Op.lte]: endDate,
      },
    },
    include: [{ model: User, as: "user" }],
  });
};
