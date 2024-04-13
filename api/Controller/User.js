import * as userService from "../Services/userService.js";

export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const agentId = req.headers["x-agent-id"];
    const role = req.headers["role"];
    if (!agentId || !role) {
      return res.status(400).send("Agent ID or role is required");
    }

    const newUser = await userService.createUser({
      name,
      email,
      agentId,
      role,
    });

    res.status(201).json({
      status: "success",
      data: newUser,
    });
  } catch (error) {
    console.error("Error creating user: ", error);
    res.status(500).json({ message: "Internal server error" + error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const agentId = req.agentId;
    if (!agentId) return res.status(400).send("Agent ID is required");
    const users = await userService.getUsersByAgentId(agentId);
    res.json(users);
  } catch (error) {
    res.status(500).send("Internal server error" + error.message);
  }
};

export const createAgent = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newAgent = await userService.createAgent({ name, email });

    res.status(201).json({
      status: "success",
      data: newAgent,
    });
  } catch (error) {
    console.error("Error creating Agent: ", error);
    res.status(500).json({ message: "Internal server error" + error.message });
  }
};

export const getAgents = async (req, res) => {
  try {
    const agents = await userService.getAllAgents();
    res.json(agents);
  } catch (error) {
    res.status(500).send("Internal server error" + error.message);
  }
};
