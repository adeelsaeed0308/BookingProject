export const getScheduler = async (req, res) => {
  const { week } = req.query;

  res.status(200).json({
    message: "ok",
    weekReceived: week || "No week date provided",
  });
};
