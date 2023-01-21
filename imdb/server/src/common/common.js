const success = (res, result) =>  {
	res.json({ status: true, message: result.message ?? "success", data: result.data ?? {} });
}

const failure = (res, result) =>  { 
	res.status(400);
	res.json({ status: false, message: result.message ?? "failed", data: result.data ?? {} }); 
};

module.exports = {
	success,
	failure
}