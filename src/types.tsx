// type
export type TodoType = {
    todoText: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    onClick:any ,
    disabled:boolean

}

export type IncompleteTodosType = {
    todos:string[],
    onClickComplete :any,
    onClickDelete:any
}

export type CompleteTodosType = {
    todos:string[],
    onClickBack:any
}