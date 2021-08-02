const response = {
  success: (res, data, message) => {
    const response0 = {
      succes: true,
      data,
      code: 200,
      message,
    };
    res.json(response0);
  },
  failed: (res, code, err) => {
    if (code === 500) {
      const response1 = {
        succes: false,
        data: null,
        code,
        message: `500 internal server error${err}`,
      };
      res.json(response1);
    } else if (code === 401) {
      const response2 = {
        succes: false,
        data: null,
        code,
        message: '401 Unauthorized',
      };
      res.json(response2);
    }
  },
};

module.exports = response;
