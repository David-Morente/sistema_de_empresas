import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "Api interfer",
            version: "1.0.0",
            description: "Sistema interfer de empresas",
            contact:{
                name: "David Morente",
                email: "dmorente-2023292@kinal.org.gt"
            }
        },
        servers:[
            {
                url: "http://localhost:3000/systemCompany/v1"
            }
        ]
    },
    apis:[
        "./src/auth/*.js",
        "./src/user/*.js",
        "./src/company/*.js",
    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi }