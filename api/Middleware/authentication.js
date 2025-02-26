export function roleAccess(permittedRoles) {
  return (req, res, next) => {
    if (!req.agentRole || !permittedRoles.includes(req.agentRole)) {
      return res.status(403).send("Forbidden");
    }
    next();
  };
}

export function auth(req, res, next) {
  const agentId = req.headers["x-agent-id"];
  const agentRole = req.headers["role"];

  if (!agentId) return res.status(401).send("Authentication required");

  req.agentId = agentId;
  req.agentRole = agentRole;
  if (!req.agentRole) return res.status(401).send("Role not found");

  next();
}
