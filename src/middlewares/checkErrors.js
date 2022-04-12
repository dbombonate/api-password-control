export default async (req, res, err, next) => {
  if (err instanceof Error) {
    return res.status(400).send({
      error: err.message,
    });
  }

  /*  return res.status(500).send({
    status: 'error',
    message: 'Internal Server Error',
  }); */

  return next();
};
