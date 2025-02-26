import User from "../user/user.model.js"

export const existEmail = async(email = '') =>{
    const existe = await User.findOne({email})
    if(existe){
        throw new Error(`El email ${email} ya fue registrado previamente`)
    }
}

export const userExist = async(uid = '') => {
    const existe = await User.findById(uid)
    if(!existe) {
        throw new Error("El usuario no existe")    
    }
}
