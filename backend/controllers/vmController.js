const Model = require("../models/schema");

module.exports = {
    getAllVm(req, res) {
        Model.getAllVm().then(rsp => {
            res.send(rsp);
        });
    },
    addVm(req, res) {
        Model.addVm(req.body).then(rsp => {
            res.send(rsp);
        });
    },
    existingVm(req, res) {
        Model.existingVm(req.body).then(rsp => {
            res.send(rsp);
        });
    },
    getVmByIp(req, res) {
        Model.getVmByIp(req.body).then(rsp => {
            res.send(rsp);
        });
    },
    updateState(req, res) {
        Model.updateState(req.body).then(rsp => {
            res.send(rsp);
        });
    },
}