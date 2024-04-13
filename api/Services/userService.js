import dbPromise from "../models/index.js";
const db = await dbPromise;
const { User } = db;
const { Agent } = db;
export const createUser = async ({ name, email, agentId, role }) => {
  return await User.create({ name, email, agentId, role });
};

export const getUsersByAgentId = async (agentId) => {
  return await User.findAll({
    where: { agentId: agentId },
  });
};

export const createAgent = async ({ name, email }) => {
  return await Agent.create({ name, email });
};

export const getAllAgents = async () => {
  return await Agent.findAll({
    where: { role: "ADMIN" },
  });
};
