interface IErrorResponse extends Error{

    statusCode?:number;

    message:string


}

export default IErrorResponse