exports.successResWithData = (res, message, data) => {
    res.status(200)
        .json({
            status: true,
            message,
            data
        })
};

exports.errorRes = (res, statusCode, message) => {
    res.status(statusCode)
        .json({
            status: false,
            message
        })
}
