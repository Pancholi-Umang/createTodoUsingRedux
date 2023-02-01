export const AddTODO = (data) => {
    return{
        type:"ADDTODO",
        payload : data
    }
}
export const UpdateTODO = (data) => {
    console.log(data)
    return{
        type:"UPDATETODO",
        payload : data
    }
}

export const RemoveTODO = (data) => {
    console.log(data)
    return{
        type:"REMOVETODO",
        payload : data
    }
}

export const DeleteAllTODO = () => {
    return{
        type:"DELETEALLTODO"
    }
}
