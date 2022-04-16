import { Model, DataTypes, Sequelize } from "sequelize"
import LoginUser from "./loginuser";

export default class ScrapingTargetList extends Model {
  public id!: number;

  public siteId!: number;
  public url!: string;
  public hp!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  static initialize(sequelize: Sequelize) {
    this.init({
      siteId: DataTypes.INTEGER,
      url: DataTypes.STRING,
      hp: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'ScrapingTargetList',
    })
    return this;
  }
  static assonciate() {
    ScrapingTargetList.hasOne(LoginUser, {
      sourceKey: "siteId",
      foreignKey: "userId"
    })
  }
}