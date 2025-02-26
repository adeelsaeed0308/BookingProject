import { DataTypes } from "sequelize";

export const up = async (queryInterface) => {
  await queryInterface.createTable("Bookings", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    startAt: {
      type: DataTypes.DATE,
    },
    finishAt: {
      type: DataTypes.DATE,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
    },
    agentId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Agents",
        key: "id",
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });
};

export const down = async (queryInterface) => {
  await queryInterface.dropTable("Bookings");
};
