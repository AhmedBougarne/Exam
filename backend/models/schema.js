const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VmSchema = new mongoose.Schema({
    name: { type: String },
    ip: { type: String },
    os: { type: String },
    state: { type: String },
})

const VM = mongoose.model("vm", VmSchema);


module.exports = {


    async getAllVms() {
        const vms = await VM.find({ });
        return vms;
    },

    async addVm({name,ip,os,state}) {
        const vm = new VM({ name: name,ip: ip,os: os,state: state});
        return await vm.save();
    },

    async existingVm({name}) {
        const c = await VM.find({ name: name });
        return c;
    },

    async getVmByIp({ip}) {
        const machine = await VM.find({ ip: ip });
        return machine;
    },

    async updateState({newState,name}) {
        const m = VM.findOne({name:name})
        const updatedVm= await VM.findOneAndUpdate(m,{state:newState});
        return updatedVm;
    },
}