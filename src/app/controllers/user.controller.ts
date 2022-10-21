import * as userDao from "../data-access/user.dao";

export const getAllUserHandler = async (req, res, next) => {
  try {
    const user = await userDao.findAll();

    return res.json(user);
  } catch (err) {
    return next(err);
  }
};

export const getByIdUserHandler = async (req, res, next) => {
  try {
    const user = await userDao.findOne(+req.params.id);

    return res.json(user);
  } catch (err) {
    return next(err);
  }
};

export const createUserHandler = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    const user = await userDao.insert({ name, email, phone });

    return res.json(user);
  } catch (err) {
    return next(err);
  }
};

export const editUserHandler = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    const user = await userDao.update(+req.params.id, { name, email, phone });

    return res.json(user);
  } catch (err) {
    return next(err);
  }
};

export const deleteByIdUserHandler = async (req, res, next) => {
  try {
    const user = await userDao.remove(+req.params.id);

    return res.json(user);
  } catch (err) {
    return next(err);
  }
};
