//calls flask server
async function flaskController(req, res) {
  try {
    console.log("flaskController called");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
}
module.exports = flaskController;
