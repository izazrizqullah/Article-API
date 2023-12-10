const { Article } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findData = await Article.findOne({
      where: { id },
    });

    if (!findData) {
      return res.status(404).json({
        status: false,
        message: "data not found",
      });
    }

    const deleted = await Article.destroy({ where: { id } });

    return res.status(200).json({
      status: true,
      message: "delete  success",
      data: deleted,
    });
  } catch (error) {
    next(error);
  }
};
