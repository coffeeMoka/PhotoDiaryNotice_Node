import { Model, DataTypes, Sequelize } from "sequelize"
import ScrapingTargetList from "./scrapingtargetlist";

export default class LoginUser extends Model {
  public id!: number;
  public userId!: number;
  public name!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static initialize(sequelize: Sequelize) {
    this.init({
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      password: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'LoginUser',
    })
    return this;
  }
  static assonciate() {
    LoginUser.belongsTo(ScrapingTargetList, {
      foreignKey: "userId",
      as: "siteId"
    })
  }
}