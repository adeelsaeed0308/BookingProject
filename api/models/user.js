import { Model, DataTypes } from "sequelize";

export default (sequelize) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Booking, { foreignKey: "userId", as: "bookings" });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      agentId: DataTypes.INTEGER,
      role: {
        type: DataTypes.ENUM,
        values: ["REGULAR", "ADMIN"],
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
